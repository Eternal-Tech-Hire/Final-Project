import { ObjectId } from "mongodb";

export interface User {
  _id: ObjectId;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  role: string;
  cv: string;
}

export interface CategoryTypes {
  _id: ObjectId;
  name: string;
  companyId: string;
  favUser: string[];
}

export interface CompanyTypes {
  _id: ObjectId;
  name: string;
  email: string;
  password: string;
  companyLogo: string;
  role: string;
  jobOffer: string;
  companyId: []
}

export interface EventsTypes{
  _id: ObjectId;
  name: string;
  description: string;
  imgUrl: string;
  date: string;
  location: string;
  categoryId: string;
  companyId: []
  Company:[CompanyTypes]
}

export interface TicketTypes {
  _id: ObjectId;
  name: string;
  paymentStatus: string;
  eventId: string;
  userId: string;
}

export interface Response<T> {
    error?: string;
    data?: T | null;
}
