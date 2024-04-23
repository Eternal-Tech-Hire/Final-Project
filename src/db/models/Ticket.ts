import { db } from '@/db/config/mongodb'
import { ObjectId } from 'mongodb'
import { TicketTypes } from '@/types'

interface TicketTypesLocal {
	name: string;
	paymentStatus: string;
	eventId: string;
	userId: string;
}

interface TicketAddTypes {
	name: string;
	paymentStatus: string;
}

class Ticket {

	static async addTicket(data: TicketAddTypes, userId: string, eventId: string) {
		const validate = await this.getTicketByUserIdAndEventId(userId, eventId)

		if (validate) {
			throw new Error('Ticket already in orders')
		} else {
			const ticket_order = {
				name: data.name,
				paymentStatus: data.paymentStatus,
				eventId: eventId,
				userId: new ObjectId(userId)
			}
			// console.log(ticket_order);

			return await db.collection('Tickets').insertOne(ticket_order)
		}
	}

	static async updateTicket(data: TicketTypesLocal, _id: string) {
		const id = new ObjectId(_id)
		return await db.collection("Tickets").updateOne({ _id: id }, {
			$set: {
				name: data.name,
				paymentStatus: data.paymentStatus,
				eventId: data.eventId
			}
		})
	}


	static async getAll() {
		return (await db.collection('Tickets').find({}).toArray()) as TicketTypes[];
	}

	static async getTicketByUserIdAndEventId(userId: string, eventId: string) {
		const id = new ObjectId(userId)
		// const instanceEventId = new ObjectId(eventId)
		const data = await db.collection('Tickets').findOne({ userId: id, eventId: eventId })
		return data
	}

	static async getTicketByUserId(userId: string) {
		const id = new ObjectId(userId)
		const data = (await db.collection('Tickets').find({ userId: id }).toArray()) as TicketTypes[];
		// console.log(data, "-------------");
		return data
	}

	static async getTicketById(_id: string) {
		const instanceTicketId = new ObjectId(_id)
		return await db.collection('Tickets').findOne({ _id: instanceTicketId });
	}


	static async removeTicketById(_id: string) {
		const instanceTicketId = new ObjectId(_id);
		return (await db.collection('Tickets').deleteOne({ _id: instanceTicketId }))
	}
}

export default Ticket;