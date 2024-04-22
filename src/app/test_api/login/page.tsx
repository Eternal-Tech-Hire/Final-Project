import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function login() {


    async function loginAction(formData: FormData) {
        "use server"
        cookies().delete("Authorization");
        try {
            const rawFormData = {
                email: formData.get("email"),
                password: formData.get("password"),
            };

            const response = await fetch("http://localhost:3000/api/auth/login", {
                method: "POST",
                cache: "no-store",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(rawFormData),
            });

            if (response.status != 200) {
                throw new Error("Failed to Login" + response.status);
            }
            const responseJson = await response.json();
            console.error(responseJson);
            cookies().set("Authorization", `Bearer ${responseJson.data.accessToken}`);
        } catch (error) {
            console.error("Login Error", error);
            redirect("/test_api/login");
        }
        return redirect("/test_api");4
    }

    return (
        <>
        <form action={loginAction} className="space-y-4">
            <h1>TEST REGISTER</h1>
            <div>
                <span>Email</span>
                <input type="email" name="email" id="email" className="border broder-2 ml-2" />
            </div>
            <div>
                <span>Password</span>
                <input type="password" name="password" id="password" className="border broder-2 ml-2" />
            </div>
            <button type="submit">Login</button>
        </form>
        </>
    );
}
