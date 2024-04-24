import { db } from '@/db/config/mongodb'
import { ObjectId } from 'mongodb'
import { CompanyTypes } from '@/types'
import bcryptjs from 'bcryptjs'
import { z } from 'zod'
import { NextResponse } from 'next/server'


interface CompanyTypesLocal {
	name: string;
	email: string;
	password: string;
	companyLogo: string;
	role: string;
	jobOffer: string;
	fields:[];
	fav: [];
}

const CompanyValidation = z.object({
	name: z.string({
        required_error: "Name can't be empty"
    }),
    email: z.string({
        required_error: "Email can't be empty"
    }).email({
        message: "Must be Email Format"
    }),
    phoneNumber: z.string({
        required_error: "Phone Number can't be empty"
    }),
    password: z.string({
        required_error: "Password can't be empty"
    }).min(6, {message: "Password must be at least 6 characters"})
})



class Company {
	static async store(data: CompanyTypesLocal) {
		const validation = CompanyValidation.safeParse(data);
        // console.log(validation, "<< validate");
        
        if (!validation.success) {
            const errors = validation.error
            
            throw errors
        }

		const data_object = {
			name: data.name,
			email: data.email,
			password: bcryptjs.hashSync(data.password),
			companyLogo: "https://d3g5ywftkpzr0e.cloudfront.net/wp-content/uploads/2020/01/15094433/hacktiv8-1.png",
			role: "company",
			fields: ["Technology"],
			jobOffer: "Fullstack Developer",
			fav: []
		}
		const [validateUser] = await db.collection('Company').find({
                    email: data.email
        }).toArray()
        if (validateUser) throw new Error("Email/Username Already Registered")
		return await db.collection('Company').insertOne(data_object)
	}

    static async login(data: CompanyTypesLocal) {
        try {
            const { email, password } = data
            const user = await this.getByEmail(email);

            if(!user) {
                throw new Error("Invalid Username or Password")
            }
        } catch (error) {
            console.log(error);
        }
    }
    
    static async getByEmail(email: string) {
        return await db.collection('Company').findOne({ email }) as CompanyTypes | null;
    }

	// static async getAll() {
	// 	return (await db.collection('Company').find({}).toArray()) as CompanyTypes[];
	// }

	static async getAll() {
		const aggregate = [
			{
				'$lookup': {
					'from': 'Users',
					'localField': 'fav.seekerId',
					'foreignField': '_id',
					'as': 'Users'
				}
			}
		]
		return (await db.collection('Company').aggregate(aggregate).toArray()) as CompanyTypes[];
	}


	static async getById(_id: string) {
		const instanceTicketId = new ObjectId(_id)
		const aggregate = [
			{
				'$match' : {'_id': instanceTicketId}
			},
			{
				'$limit' : 1

			},
			{
				'$lookup': {
					'from': 'Users',
					'localField': 'fav.seekerId',
					'foreignField': '_id',
					'as': 'fav_info'
				}
			}
		]
		const data = await db.collection('Company').aggregate(aggregate).toArray()
		return data[0];
	}


	static async removeById(_id: string) {
		const instanceTicketId = new ObjectId(_id);
		return (await db.collection('Company').deleteOne({ _id: instanceTicketId }))
	}

	static async update(updateData: CompanyTypes, _id: string) {
		const id = new ObjectId(_id)
		const data = (await db.collection('Company').findOne({ id })) as CompanyTypes | null
        if (!data) {
            return NextResponse.json({
                message: "User Not Found"
            },
                { status: 404 })
        };

		return await db.collection("Company").updateOne({ _id: id }, {
			$set: {
				name: (updateData.name != null) ? updateData.name : data.name,
                email: (updateData.email != null) ? updateData.email : data.email,
                password: (updateData.password != null) ? updateData.password : data.password,
				jobOffer: (updateData.jobOffer != null) ? updateData.jobOffer : data.jobOffer,
			}
		})
	}

	static async findFeaturedCompany() {
        const find = await this.getAll()
		
        return find?.slice(0, 5)    
    }

	static async updateFavEvent(companyId: string, seekerId: string, url: string) {
		// console.log(seekerId, "????");
		
		const id_company = new ObjectId(companyId)
		const idSeeker = new ObjectId(seekerId);
		// console.log(url, id_company, idSeeker);
		console.log("masukkk");
		
		let dataUser = await db.collection('Users').findOne({ _id: idSeeker });
		if (dataUser) {
			console.log("duplicate");
			throw new Error ("Duplicate")
		}

		let data = await db.collection('Company').findOne({ _id: id_company });
		console.log(data);
		
		const favs = data!.fav;

		console.log(favs, '<< FAv')
		favs.push({
			seekerId: idSeeker,
			url: url
		})
		return await db.collection("Company").updateOne({ _id: id_company }, {
			$set: {
				fav: favs
			}
		})
	}
}

export default Company;