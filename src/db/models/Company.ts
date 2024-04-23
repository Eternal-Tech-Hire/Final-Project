import { db } from '@/db/config/mongodb'
import { ObjectId } from 'mongodb'
import { CompanyTypes } from '@/types'

interface CompanyTypesLocal{
	name: string;
	jobOffer: string;
}


class Company{

	static async store(data: CompanyTypesLocal){
        const data_object = {
        	name: data.name,
			jobOffer: data.jobOffer
        }
        return await db.collection('Company').insertOne(data_object)
	}


	static async getAll(){
		return (await db.collection('Company').find({}).toArray()) as CompanyTypes[];
	}

    static async getById(_id: string) {
        const instanceTicketId = new ObjectId(_id)
        return await db.collection('Company').findOne({_id: instanceTicketId});
    }


    static async removeById(_id: string){
    	const instanceTicketId = new ObjectId(_id);
    	return (await db.collection('Company').deleteOne({_id : instanceTicketId}))
    }

	static async update(data: CompanyTypes, _id: string){
		const id = new ObjectId(_id)
		return await db.collection("Company").updateOne({_id: id},{
			$set: {
				    name: data.name,
					jobOffer: data.jobOffer
			}
		})
	}

	static async findFeaturedCompany() {
        const find = await this.getAll()
		
        return find?.slice(0, 5)    
    }
}

export default Company;