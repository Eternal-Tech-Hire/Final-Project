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

interface newUser {
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    role: string;
}

const UserValidation = z.object({
    email: z.string({
        required_error: "Email can't be empty"
    }).email(),
    password: z.string({
        required_error: "Password can't be empty"
    })
})


class UserModel {
    static async getUserByEmail(email: string) {
        return await db.collection('Users').findOne({ email }) as User | null;
    }

    static async create(newUser: newUser) {
        const validation = UserValidation.safeParse(newUser);
        if (!validation.success) {
            const errors = validation.error
            throw errors
        }

        const user = {
            ...newUser,
            password: bcryptjs.hashSync(newUser.password)
        }
        const [validateUser] = await db.collection('Users').find({
                    email: user.email
        }).toArray()
        if (validateUser) throw new Error("Email/Username Already Registered")
        const data = await db.collection('Users').insertOne(user)
        return data
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