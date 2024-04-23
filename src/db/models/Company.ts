import { db } from '@/db/config/mongodb'
import { ObjectId } from 'mongodb'
import { CompanyTypes } from '@/types'

interface CompanyTypesLocal {
	name: string;
	jobOffer: string;
	fav: [];
}


class Company {
	static async store(data: CompanyTypesLocal) {
		const data_object = {
			name: data.name,
			jobOffer: data.jobOffer,
			fav: []
		}
		return await db.collection('Company').insertOne(data_object)
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

	static async update(data: CompanyTypes, _id: string) {
		const id = new ObjectId(_id)
		return await db.collection("Company").updateOne({ _id: id }, {
			$set: {
				name: data.name,
				jobOffer: data.jobOffer,
				fav: []
			}
		})
	}

	static async updateFavEvent(idCompany: string, idEvent: string, url_fav: string) {
		const id_company = new ObjectId(idCompany)
		const idEventObject = new ObjectId(idEvent);
		let data = await db.collection('Company').findOne({ _id: id_company });
		const favs = data!.fav;
		favs.push({
			id_event: idEventObject,
			url: url_fav
		})
		return await db.collection("Company").updateOne({ _id: id_company }, {
			$set: {
				fav: favs
			}
		})
	}

	static async findFeaturedCompany() {
        const find = await this.getAll()
		
        return find?.slice(0, 5)    
    }
}

export default Company;