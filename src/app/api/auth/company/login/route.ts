import CompanyModel from "@/db/models/Company";
import { compareTextWithHash } from "@/db/utils/hash"
import { createToken } from "@/db/utils/jwt" 
import { NextResponse } from "next/server"
import { ZodError, z } from "zod"


const UserValidation = z.object({
    email: z.string(),
    password: z.string()
})

export async function POST(request: Request) {
    try {
        const { email, password }: { email: string, password: string } = await request.json()

        const validation = UserValidation.safeParse({ email, password })
        if (!validation.success) {
            throw validation.error
        }

        const dataLogin = await CompanyModel.getByEmail(email)
        
        if (!dataLogin) {
            return NextResponse.json({
                message: "User Not Found"
            }, {
                status: 401
            })
        }

        const validatePassword = compareTextWithHash(password, dataLogin.password)
        if (!validatePassword) {
            return NextResponse.json({
                message: "Invalid Password"
            }, {
                status: 401
            })
        }

        const accessToken = createToken({
            _id: dataLogin._id,
            email: dataLogin.email,
            role: dataLogin.role
        })


        return NextResponse.json({
            message: "Login Success Sebagai Company",
            data: {
                accessToken,
                role: dataLogin.role
            }
        }, {
            status: 200
        })

    } catch (error) {
        if (error instanceof ZodError) {
            const errorPath = error.issues[0].path[0];
            const errorMessage = error.issues[0].message

            return NextResponse.json({
                message: `${errorPath} ${errorMessage}`
            })
        }

        return NextResponse.json({
            message: 'Internal Server Error'
        }, {
            status: 500
        })
    }
}
