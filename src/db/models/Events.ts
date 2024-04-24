import { db } from '@/db/config/mongodb'
import { ObjectId } from 'mongodb'
import { EventsTypes } from '@/types'

interface EventsTypesLocal {
	name: string;
	description: string;
	date: string;
	location: string;
	categoryId: string;
	companyId: []
}


class Events {

	static async store(data: EventsTypesLocal) {
		const Events_add = {
			name: data.name,
			description: data.description,
			date: data.date,
			location: data.location,
			categoryId: data.categoryId,
			companyId: []
		}
		return await db.collection('Events').insertOne(Events_add)
	}

	static async getAll() {
		const aggregate = [
			{
				'$lookup': {
					'from': 'Company',
					'localField': 'companyId.id_company',
					'foreignField': '_id',
					'as': 'Company'
				}
			}
		]
		return (await db.collection('Events').aggregate(aggregate).toArray()) as EventsTypes[];
	}

	static async getById(_id: string) {
		const instanceTicketId = new ObjectId(_id)
		return await db.collection('Events').findOne({ _id: instanceTicketId });
	}


	static async removeById(_id: string) {
		const instanceTicketId = new ObjectId(_id);
		return (await db.collection('Events').deleteOne({ _id: instanceTicketId }))
	}

	static async addCompanyJoin(_id: string, idCompany: string) {
		const idEventObject = new ObjectId(_id);
		const idCompanyObject = new ObjectId(idCompany)
		let data = await db.collection('Events').findOne({ _id: idEventObject });
		const companyIds = data!.companyId;
		const validation = companyIds.filter((e: { id_company: string }) => {
			return e.id_company == idCompany
		})
		console.error(validation);
		if (validation.length == 0) {
			companyIds.push({
				id_company: idCompanyObject,
				date_join: Date()
			})

			console.error("Company Berhasil Join")

			return await db.collection("Events").updateOne({ _id: idEventObject }, {
				$set: {
					companyId: companyIds
				}
			})
		}
	}

	static async update(data: EventsTypes, _id: string) {
		const id = new ObjectId(_id)
		return await db.collection("Events").updateOne({ _id: id }, {
			$set: {
				name: data.name,
				description: data.description,
				date: data.date,
				location: data.location,
				categoryId: data.categoryId
			}
		})
	}
}

export default Events;