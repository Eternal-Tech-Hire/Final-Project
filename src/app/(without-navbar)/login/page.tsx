import Link from "next/link";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { ClientFlashComponent } from "@/components/ClientFlash";

const LoginPage = () => {
  async function loginAction(formData: FormData) {
    "use server";
    cookies().delete("Authorization");
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
      const response = await fetch(
        "http://localhost:3000/api/auth/company/login",
        {
          method: "POST",
          cache: "no-store",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(rawFormData),
        }
      );
      if (response.status !== 200) {
        return redirect(`/login?error=Wrong Email/Password`);
      }
    }
    const responseJson = await response.json();

    cookies().set("Authorization", `Bearer ${responseJson.data.accessToken}`);
    return redirect("/");
  }

  return (
    <>
      {/* This is an example component */}
      <div className="font-sans">
        <div
          className="relative h-screen flex flex-col sm:justify-center items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/vector-bg.jpg)`, // Menambahkan gradient gelap
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
          }}
        >
          <div className="relative sm:max-w-sm w-full">
            <div className="card bg-cyan-500 shadow-lg w-full h-full rounded-3xl hidden lg:flex absolute transform -rotate-6" />
            <div className="card bg-violet-600 shadow-lg w-full h-full hidden lg:flex rounded-3xl absolute transform rotate-6" />
            <div className="relative w-full rounded-3xl lg:px-6 lg:py-4 p-8 min-h-screen lg:min-h-0 bg-blue-950 shadow-md">
              <div className="flex flex-col items-center mb-6">
                <Link href="/">
                  <div>
                    <img
                      src="/logo_v2.png"
                      alt="Logo"
                      className="w-28 mt-6 flex justify-center mx-auto"
                    />
                  </div>
                </Link>
                <label
                  htmlFor=""
                  className="block text-2xl text-white text-center font-bold mt-6"
                >
                  Sign In
                </label>
              </div>
              <div className="my-5 px-1">
                <ClientFlashComponent />
              </div>
              <form action={loginAction} className="mt-4">
                <div className="mt-4">
                  <label htmlFor="email" className="text-white font-bold">
                    Email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email.."
                    className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-2 focus:outline-none pl-2"
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="password" className="text-white font-bold">
                    Password:
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password.."
                    className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-2 focus:outline-none pl-2"
                  />
                </div>
                <div className="mt-7">
                  <button className="bg-gradient-to-br bg-violet-800 hover:bg-violet-600 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-indigo-700 focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
                    Sign In
                  </button>
                </div>
                {/* <div className="flex mt-7 items-center text-center">
                  <hr className="border-gray-300 border-1 w-full rounded-md" />
                  <hr className="border-gray-300 border-1 w-full rounded-md" />
                </div> */}
                <div className="mt-5">
                  <div className="flex items-center justify-center space-x-2 my-5">
                    <span className="h-px w-16 bg-gray-100"></span>
                    <span className="text-white font-normal">
                      Don't have an account yet?
                    </span>
                    <span className="h-px w-16 bg-gray-100"></span>
                  </div>
                  {/* <h1 className="block text-sm text-white text-center hover:underline hover:font-semibold mb-4">
                    Don't have an account yet? Sign Up Below..
                  </h1> */}
                  <Link href="/register">
                    <button
                      id="signup"
                      className="bg-gradient-to-br bg-violet-800 hover:bg-violet-600 w-full py-3 mb-5 rounded-xl text-white shadow-xl hover:shadow-indigo-700 focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
                    >
                      Sign Up
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
