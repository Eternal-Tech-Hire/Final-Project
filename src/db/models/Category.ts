import { db } from '@/db/config/mongodb'
import { ObjectId } from 'mongodb'
import { CategoryTypes } from '@/types'


interface CategoryTypesLocal{
	name: string;
	companyId: string;
}


class Category{

	static async store(data: CategoryTypesLocal){
        const data_object = {
        	name: data.name,
			companyId: data.companyId
        }
        return await db.collection('Category').insertOne(data_object)
	}


	static async getAll(){
		return (await db.collection('Category').find({}).toArray()) as CategoryTypes[];
	}

    static async getById(_id: string) {
        const instanceTicketId = new ObjectId(_id)
        return await db.collection('Category').findOne({_id: instanceTicketId}) as CategoryTypes;
    }


    static async removeById(_id: string){
    	const instanceTicketId = new ObjectId(_id);
    	return (await db.collection('Category').deleteOne({_id : instanceTicketId}))
    }

	static async update(data: CategoryTypes, _id: string){
		const id = new ObjectId(_id)
		return await db.collection("Category").updateOne({_id: id},{
			$set: {
				    name: data.name,
					companyId: data.companyId
			}
		})
	}
}

export default Category;