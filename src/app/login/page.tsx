const LoginPage = () => {
  return (
    <>
      {/* This is an example component */}
      <div className="font-sans">
        <div
          className="relative min-h-screen flex flex-col sm:justify-center items-center"
          style={{
            backgroundImage: `url(/vector-bg.jpg)`,
            backgroundSize: "100%",
          }}
        >
          <div className="relative sm:max-w-sm w-full">
            <div className="card bg-cyan-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-12" />
            <div className="card  bg-purple-200 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-12" />
            <div className="relative w-full rounded-3xl  px-6 py-4 bg-purple-500 shadow-md">
              <div className="flex flex-col items-center mb-6">
                <img
                  src="/logo_transparant.png"
                  alt="Logo"
                  className="w-36"
                />{" "}
                <label
                  htmlFor=""
                  className="block text-2xl text-white text-center font-bold"
                >
                  Login
                </label>
              </div>
              <form method="#" action="#" className="mt-4">
                <div className="mt-4">
                  <label htmlFor="email" className="text-white font-bold">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter Your Email.."
                    className="mt-1 block w-full bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-2 focus:outline-none"
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="password" className="text-white font-bold">
                    Password:
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Password.."
                    className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-2 focus:outline-none"
                  />
                </div>
                <div className="mt-7">
                  <button className="bg-gradient-to-br bg-violet-800 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-indigo-700 focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                    Login
                  </button>
                </div>
                <div className="flex mt-8 items-center text-center">
                  <hr className="border-gray-300 border-1 w-full rounded-md" />
                  <hr className="border-gray-300 border-1 w-full rounded-md" />
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
