import { db } from '@/db/config/mongodb'
import { ObjectId } from 'mongodb'
import { EventsTypes } from '@/types'

interface EventsTypesLocal{
	name: string;
	description: string;
	date: string;
	location: string;
	categoryId: string;
}


class Events{

	static async store(data: EventsTypesLocal){
        const Events_add = {
        	name: data.name,
			description: data.description,
			date: data.date,
			location: data.location,
			categoryId: data.categoryId
        }
        return await db.collection('Events').insertOne(Events_add)
	}


	static async getAll(){
		return (await db.collection('Events').find({}).toArray()) as EventsTypes[];
	}

    static async getById(_id: string) {
        const instanceTicketId = new ObjectId(_id)
        return await db.collection('Events').findOne({_id: instanceTicketId});
    }


    static async removeById(_id: string){
    	const instanceTicketId = new ObjectId(_id);
    	return (await db.collection('Events').deleteOne({_id : instanceTicketId}))
    }

	static async update(data: EventsTypes, _id: string){
		const id = new ObjectId(_id)
		return await db.collection("Events").updateOne({_id: id},{
			$set: {
				    name: data.name,
					description: data.description,
					date: data.date,
					location: data.location,
					categoryId: data.categoryId
			}
		})
	}

	static async findFeaturedEvents() {
        const find = await this.getAll()
		
        return find?.slice(0, 3)    
    }
}

export default Events;