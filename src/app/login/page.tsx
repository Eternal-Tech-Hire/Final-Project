const LoginPage = () => {
    return (
      <>
        {/* This is an example component */}
        <div className="font-sans">
          <div
            className="relative h-screen flex flex-col sm:justify-center items-center"
            style={{
              backgroundImage: `url(/vector-bg.jpg)`,
              backgroundSize: "cover", // Menggunakan cover agar gambar latar belakang menutupi seluruh area
              backgroundAttachment: "fixed", // Tetapkan posisi gambar latar belakang
              backgroundPosition: "center", // Atur posisi gambar latar belakang di tengah
            }}
          >
            <div className="relative sm:max-w-sm w-full">
              <div className="card bg-cyan-400 shadow-lg w-full h-full rounded-3xl absolute transform -rotate-6" />
              <div className="card bg-purple-200 shadow-lg w-full h-full rounded-3xl absolute transform rotate-6" />
              <div className="relative w-full rounded-3xl px-6 py-4 bg-purple-700 shadow-md">
                <div className="flex flex-col items-center mb-6">
                  <div>
                    <img src="/logo_transparant.png" alt="Logo" className="w-36" />
                  </div>
                  <label
                    htmlFor=""
                    className="block text-2xl text-white text-center font-bold -mt-6 z-40"
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
                    <button className="bg-gradient-to-br bg-violet-600 hover:bg-violet-800 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-indigo-700 focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
                      Sign In
                    </button>
                  </div>
                  <div className="flex mt-3 items-center text-center">
                    <hr className="border-gray-300 border-1 w-full rounded-md" />
                    <hr className="border-gray-300 border-1 w-full rounded-md" />
                  </div>
                  <div className="mt-5">
                    <h1 className="block text-sm text-white text-center hover:underline hover:font-semibold mb-4">
                      Don't have an account yet? Sign Up Below..
                    </h1>
                    <button
                      id="signup"
                      className="bg-gradient-to-br bg-violet-600 hover:bg-violet-800 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-indigo-700 focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
                    >
                      Sign Up
                    </button>
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
  