
import { redirect } from "next/navigation";


export const dynamic = "force-dynamic"

export default function register() {
    async function registerAction(formData: FormData) {
        "use server";

        const rawFormData = {
            name: formData.get("name"),
            email: formData.get("email"),
            password: formData.get("password"),
            phoneNumber: formData.get("phoneNumber"),
            role: "Member",
            cv: ""
        };

        const response = await fetch(`http://localhost:3000/api/auth/register`, {
            method: "post",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(rawFormData),
        });
        redirect("/test_api/login");
    }

    return (
        <>
        <form action={registerAction} className="space-y-4">
            <h1>TEST REGISTER</h1>
            <div>
                <span>Name</span>
                <input type="text" name="name" id="name" className="border broder-2 ml-2" />
            </div>
            <div>
                <span>Email</span>
                <input type="email" name="email" id="email" className="border broder-2 ml-2" />
            </div>
            <div>
                <span>Password</span>
                <input type="password" name="password" id="password" className="border broder-2 ml-2" />
            </div>
            <div>
                <span>Phone Number</span>
                <input type="text" name="phoneNumber" id="phoneNumber" className="border broder-2 ml-2" />
            </div>
            <button type="submit">REGISTER</button>
        </form>
        </>
    );
}
