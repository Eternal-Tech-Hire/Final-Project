
import { redirect } from "next/navigation";


export const dynamic = "force-dynamic"

export default function register() {
    async function registerAction(formData: FormData) {
        "use server";

        const rawFormData = {
            name: formData.get("name"),
            email: formData.get("email"),
            password: formData.get("password"),
            jobOffer: formData.get("jobOffer"),
        };

        const response = await fetch(`http://localhost:3000/api/auth/company/register`, {
            method: "post",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(rawFormData),
        });
        redirect("http://localhost:3000/test_api/company");
    }

    return (
        <>
        <form action={registerAction} className="space-y-4">
            <h1>TEST REGISTER SEBAGAI COMPANY</h1>
            <div>
                <span>Name Company</span>
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
                <span>Job Offer</span>
                <input type="text" name="jobOffer" id="jobOffer" className="border broder-2 ml-2" />
            </div>
            <button type="submit">REGISTER</button>
        </form>
        </>
    );
}
