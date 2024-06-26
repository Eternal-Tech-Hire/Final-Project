import { db } from '@/db/config/mongodb'
import { ObjectId } from 'mongodb'
import bcryptjs from 'bcryptjs'
import { z } from 'zod'
import { User } from '@/types'
import { NextResponse } from 'next/server'

interface Login {
    email: string;
    password: string
}

export interface newUser {
    _id: ObjectId;
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    cv: string;
}

interface updateUser { 
    name: string;
    phoneNumber: string;
    email: string;
    password: string;
    cv: string;
}

const UserValidation = z.object({
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



class UserModel {
    static async getUserByEmail(email: string) {
        return await db.collection('Users').findOne({ email }) as User | null;
    }

    static async create(newUser: newUser) {
        const validation = UserValidation.safeParse(newUser);
        // console.log(validation, "<< validate");
        
        if (!validation.success) {
            const errors = validation.error
            
            throw errors
        }

        const user = {
            ...newUser,
            role: "jobSeeker",
            cv: "",
            password: bcryptjs.hashSync(newUser.password)
        }

        const [validateUser] = await db.collection('Users').find({
                    email: user.email
        }).toArray()
        if (validateUser) throw new Error("Email/Username Already Registered")
        const data = await db.collection('Users').insertOne(user)
        return data
    }

    static async update(id: string, updateUser : updateUser) {

        const _id = new ObjectId(id)
        const data = (await db.collection('Users').findOne({ _id })) as User | null
        if (!data) {
            return NextResponse.json({
                message: "User Not Found"
            },
                { status: 404 })
        };

        return await db.collection("Users").updateOne({_id: _id},{
            $set: {
                    name: (updateUser.name != null) ? updateUser.name : data.name,
                    email: (updateUser.email != null) ? updateUser.email : data.email,
                    password: (updateUser.password != null) ? updateUser.password : data.password,
                    phoneNumber: (updateUser.phoneNumber != null) ? updateUser.phoneNumber : data.phoneNumber,
                    cv: (updateUser.cv != null) ? updateUser.cv : data.cv,
            }
        })
    }

    static async getUserById(id: string) {
        const _id = new ObjectId(id)
        const data = (await db.collection('Users').findOne({ _id })) as User | null
        if (!data) {
            return NextResponse.json({
                message: "User Not Found"
            },
                { status: 404 })
        };

        
        return data
    }

    static async login(data: Login) {
        try {
            const { email, password } = data
            const user = await this.getUserByEmail(email);
            if(!user) {
                throw new Error("Invalid Username or Password")
            }
        } catch (error) {
            console.log(error);
        }
    }

    static async findAll() {
        return (await db.collection('Users').find({}).toArray()) as User[]
    }
}

export default UserModel