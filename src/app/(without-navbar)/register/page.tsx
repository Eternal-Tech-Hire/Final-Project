import Link from "next/link";

const RegisterPage = () => {
  return (
    <>
      <link
        href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
        rel="stylesheet"
      />
      <div className="bg-purple-900 absolute top-0 left-0 bg-gradient-to-b from-gray-900 via-gray-900 to-purple-800 bottom-0 leading-5 h-full w-full overflow-hidden"></div>
      <div className="relative min-h-screen sm:flex sm:flex-row justify-center bg-transparent rounded-3xl shadow-xl">
        <div className="flex-col flex  self-center lg:px-14 sm:max-w-4xl xl:max-w-lg mr-20 mb-24 z-10">
          <div className="self-start hidden lg:flex flex-col text-white">
            <h1 className="my-3 font-semibold text-3xl">
              Welcome to{" "} <br />
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
        <div className="flex justify-center self-center z-10">
          <form
            action="#"
            method="#"
            className="lg:p-8 p-4 bg-blue-950 mx-auto lg:rounded-3xl lg:w-96 w-full "
          >
            <div className="flex flex-col items-center mb-6">
              <div>
                <img src="/logo_v2.png" alt="Logo" className="w-28" />
              </div>
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
                  placeholder="johndoe@mail.com"
                  type="text"
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
                  placeholder="******"
                  type="password"
                  className="text-sm text-black px-4 py-3 rounded-lg w-full bg-gray-200 focus:bg-gray-100 border border-gray-200 focus:outline-none focus:border-purple-400"
                />
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
        className="absolute bottom-0 left-0"
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