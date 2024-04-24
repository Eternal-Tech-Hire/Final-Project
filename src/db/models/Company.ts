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
	fav: [];
}


class Company {
	static async store(data: CompanyTypesLocal) {
		const data_object = {
			name: data.name,
			email: data.email,
			password: bcryptjs.hashSync(data.password),
			companyLogo: data.companyLogo,
			role: "company",
			jobOffer: data.jobOffer,
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

	static async getAll() {
		return (await db.collection('Company').find({}).toArray()) as CompanyTypes[];
	}

	static async getById(_id: string) {
		const instanceTicketId = new ObjectId(_id)
		return await db.collection('Company').findOne({ _id: instanceTicketId });
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
		const id_company = new ObjectId(companyId)
		const idSeeker = new ObjectId(seekerId);
		console.log(url, id_company, idSeeker);
		
		let data = await db.collection('Company').findOne({ _id: id_company });
		console.log(data);
		
		const favs = data!.fav;
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