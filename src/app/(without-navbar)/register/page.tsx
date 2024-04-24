import Link from "next/link";
import { redirect } from "next/navigation";

const RegisterPage = () => {
  async function registerAction(formData: FormData) {
    "use server";

    const rawFormData = {
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
        role : formData.get("role"),
        phoneNumber: formData.get("phoneNumber"),
    };

    if (rawFormData.role === "jobSeeker") {
      // rawFormData.cv = ""
      const response = await fetch(`http://localhost:3000/api/auth/register`, {
        method: "post",
        cache: "no-store",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(rawFormData),
    });
    }else if(rawFormData.role === "seeker"){
      const response = await fetch(`http://localhost:3000/api/auth/company/register`, {
        method: "post",
        cache: "no-store",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(rawFormData),
    });
    }

    redirect("/login");
}
  return (
    <>
      <link
        href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
        rel="stylesheet"
      />
      <div className="bg-purple-900 fixed top-0 left-0 bg-gradient-to-b from-gray-900 via-gray-900 to-purple-800 bottom-0 leading-5 h-full w-full overflow-hidden"></div>
        <div className="flex-col flex fixed w-3/4 ml-72 justify-center items-center min-h-screen  lg:px-14 lg:mb-24 z-10">
          <div className="self-start hidden lg:flex flex-col text-white sticky mb-36 top-0 w-96">
            <h1 className="my-3 font-semibold text-3xl">
              Welcome to <br />
              <span className="font-extrabold text-4xl">
                <span className="bg-gradient-to-r from-blue-700 to-emerald-500 text-transparent bg-clip-text">
                  Eternal{" "}
                </span>
                <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-transparent bg-clip-text">
                  Tech{" "}
                </span>
                <span className="bg-gradient-to-r from-cyan-500 to-blue-700 text-transparent bg-clip-text">
                  Hire
                </span>
              </span>
            </h1>
            <p className="pr-3 text-sm">
              We bring you a series of job fair events focused on technology,
              where you can find career opportunities that match your skills. We
              collaborate with various leading companies in the technology
              industry. Don't miss this opportunity, register your account now
              to join our events!
            </p>
          </div>
        </div>
      <div className="flex min-h-screen justify-center sm:flex sm:flex-row py-5 bg-transparent rounded-3xl shadow-xl">
        <div className="flex w-3/4 justify-center lg:justify-end self-end z-10 overflow-auto">
          <form
            action={registerAction}
            className="lg:px-8 lg:py-8 p-8 bg-blue-950  rounded-3xl lg:w-96 w-full "
          >
            <div className="flex flex-col items-center mb-6">
              <Link href="/">
                <div>
                  <img src="/logo_v2.png" alt="Logo" className="w-28" />
                </div>
              </Link>
              <label
                htmlFor=""
                className="block text-2xl text-white text-center font-bold mt-4"
              >
                Sign Up
              </label>
            </div>
            <div className="space-y-6">
              <div className="mb-4">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-semibold text-white mb-1"
                >
                  Full Name :
                </label>
                <input
                  id="fullName"
                  name="name"
                  className="w-full text-sm px-4 py-3 bg-gray-200 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                  type="text"
                  placeholder="John Doe"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-white mb-1"
                >
                  Email Address :
                </label>
                <input
                  id="email"
                  name="email"
                  placeholder="johndoe@mail.com"
                  type="email"
                  className="text-sm text-black px-4 py-3 rounded-lg w-full bg-gray-200 focus:bg-gray-100 border border-gray-200 focus:outline-none focus:border-purple-400"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-semibold text-white mb-1"
                >
                  Phone Number :
                </label>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="+62 812 345 678.."
                  type="number"
                  className="text-sm text-black px-4 py-3 rounded-lg w-full bg-gray-200 focus:bg-gray-100 border border-gray-200 focus:outline-none focus:border-purple-400"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-white mb-1"
                >
                  Password :
                </label>
                <input
                  id="password"
                  name="password"
                  placeholder="******"
                  type="password"
                  className="text-sm text-black px-4 py-3 rounded-lg w-full bg-gray-200 focus:bg-gray-100 border border-gray-200 focus:outline-none focus:border-purple-400"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="userType"
                  className="block text-sm font-semibold text-white mb-1"
                >
                  Role :
                </label>
                <select
                  id="userType"
                  name="role"
                  defaultValue={""}
                  className="text-sm text-black px-4 py-3 rounded-lg w-full bg-gray-200 focus:bg-gray-100 border border-gray-200 focus:outline-none focus:border-purple-400"
                >
                  <option
                    style={{ color: "#9CA3AF" }}
                    value=""
                    disabled
                  >
                    Select Role
                  </option>
                  <option value="jobSeeker">Job Seeker</option>
                  <option value="company">Company</option>
                </select>
              </div>

              <div className="flex items-center">
                <div className="text-sm mx-auto text-center">
                  <p className="text-white">
                    Already have an account?{" "}
                    <Link href="/login">
                      <span className="text-sm text-purple-500 hover:text-purple-400 hover:border-b hover:border-b-cyan-500 cursor-pointer">
                        Sign In
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
              <div> 
                <button className="bg-gradient-to-br bg-violet-800 hover:bg-violet-600 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-indigo-700 focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <svg
        className="bottom-0 left-0 opacity-0 lg:opacity-100 fixed"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#34D399" />
          </linearGradient>
        </defs>
        <path
          fill="url(#gradient)"
          fillOpacity="1"
          d="M0,0L40,42.7C80,85,160,171,240,197.3C320,224,400,192,480,154.7C560,117,640,75,720,74.7C800,75,880,117,960,154.7C1040,192,1120,224,1200,213.3C1280,203,1360,149,1400,122.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        />
      </svg>
    </>
  );
};

export default RegisterPage;
