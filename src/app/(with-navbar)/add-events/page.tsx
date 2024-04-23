import Link from "next/link";

const AddJob = () => {
  return (
    <>
      <>
        {/* component */}
        <link
          rel="stylesheet"
          href="https://cdn.tailgrids.com/tailgrids-fallback.css"
        />
        {/* ====== Contact Section Start */}
        <section className="bg-purple-900 top-0 left-0 bg-gradient-to-b from-gray-900 via-gray-900 to-purple-800 py-20 px-28 lg:py-[120px] overflow-hidden relative z-10">
          <div className="container">
            <div className="flex flex-wrap lg:justify-between lg:-mx-4 -mx-16">
              <div className="w-full lg:w-1/2 xl:w-6/12 px-4 mt-40">
                <div className="max-w-[570px] mb-12 lg:mb-0">
                  <span className="absolute mx-auto py-4 px-7 flex border w-fit bg-gradient-to-r blur-xl from-blue-700 via-emerald-500 to-cyan-500 bg-clip-text lg:text-6xl text-5xl box-content font-extrabold text-transparent text-center select-none">
                    Eternal Tech Hire
                  </span>
                  <h1 className="relative top-0 w-fit h-auto py-4 mx-auto justify-center flex bg-gradient-to-r items-center from-blue-700 via-emerald-500 to-cyan-500 bg-clip-text lg:text-6xl text-5xl font-extrabold text-transparent text-center select-auto">
                    Eternal Tech Hire
                  </h1>
                  <h2
                    className="
            text-white
            mb-6
            text-center
            uppercase
            font-bold
            text-[32px]
            sm:text-[40px]
            lg:text-[36px]
            xl:text-[40px]
            "
                  >
                    Add New Job Fair Event
                  </h2>
                  <p className="text-base text-center text-white leading-relaxed mb-9">
                    The "
                    <span className="font-semibold underline">
                      Eternal Tech Hire
                    </span>
                    " Job Fair / Job Market Service is a service that brings
                    together job seekers and employers.
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 xl:w-5/12 px-4">
                <div className="bg-blue-950 relative rounded-lg lg:p-8 p-4 shadow-lg">
                  <form>
                    <Link href="/">
                    <div className=" flex justify-center mx-auto mb-10">
                      <img src="/logo_v2.png" alt="Logo" className="lg:w-36 w-28" />
                    </div>
                    </Link>
                    <div className="mb-6">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="
                  w-full
                  rounded
                  py-3
                  px-[14px]
                  text-body-color text-base
                  border border-[f0f0f0]
                  outline-none
                  focus-visible:shadow-none
                  focus:border-primary
                  "
                      />
                    </div>
                    <div className="mb-6">
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="
                  w-full
                  rounded
                  py-3
                  px-[14px]
                  text-body-color text-base
                  border border-[f0f0f0]
                  outline-none
                  focus-visible:shadow-none
                  focus:border-primary
                  "
                      />
                    </div>
                    <div className="mb-6">
                      <input
                        type="text"
                        placeholder="Your Phone"
                        className="
                  w-full
                  rounded
                  py-3
                  px-[14px]
                  text-body-color text-base
                  border border-[f0f0f0]
                  outline-none
                  focus-visible:shadow-none
                  focus:border-primary
                  "
                      />
                    </div>
                    <div className="mb-6">
                      <textarea
                        rows={6}
                        placeholder="Your Message"
                        className="
                  w-full
                  rounded
                  py-3
                  px-[14px]
                  text-body-color text-base
                  border border-[f0f0f0]
                  resize-none
                  outline-none
                  focus-visible:shadow-none
                  focus:border-primary
                  "
                        defaultValue={""}
                      />
                    </div>
                    <div>
                      <label className="mb-5 block text-xl font-semibold text-white">
                        Upload CV
                      </label>
                      <div className="mb-8">
                        <input
                          type="file"
                          name="file"
                          id="file"
                          className="sr-only"
                        />
                        <label
                          htmlFor="file"
                          className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                        >
                          <div>
                            <span className="mb-2 block text-xl font-semibold text-white">
                              Drop files here
                            </span>
                            <span className="mb-2 block text-base font-medium text-white">
                              Or
                            </span>
                            <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-white">
                              Browse
                            </span>
                          </div>
                        </label>
                      </div>
                    </div>

                    <div>
                      <button className="bg-violet-800 hover:bg-violet-600 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-indigo-700 focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
                        Upload File
                      </button>
                    </div>
                  </form>
                  <div>
                    <span className="absolute -top-10 -right-9 z-[-1]">
                      <svg
                        width={100}
                        height={100}
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                          fill="#3056D3"
                        />
                      </svg>
                    </span>
                    <span className="absolute -right-10 top-[90px] z-[-1]">
                      <svg
                        width={34}
                        height={134}
                        viewBox="0 0 34 134"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="31.9993"
                          cy={132}
                          r="1.66667"
                          transform="rotate(180 31.9993 132)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 31.9993 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 31.9993 102.667)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy={88}
                          r="1.66667"
                          transform="rotate(180 31.9993 88)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 31.9993 73.3333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy={45}
                          r="1.66667"
                          transform="rotate(180 31.9993 45)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy={16}
                          r="1.66667"
                          transform="rotate(180 31.9993 16)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy={59}
                          r="1.66667"
                          transform="rotate(180 31.9993 59)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 31.9993 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 31.9993 1.66665)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy={132}
                          r="1.66667"
                          transform="rotate(180 17.3333 132)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 17.3333 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 17.3333 102.667)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy={88}
                          r="1.66667"
                          transform="rotate(180 17.3333 88)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 17.3333 73.3333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy={45}
                          r="1.66667"
                          transform="rotate(180 17.3333 45)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy={16}
                          r="1.66667"
                          transform="rotate(180 17.3333 16)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy={59}
                          r="1.66667"
                          transform="rotate(180 17.3333 59)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 17.3333 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 17.3333 1.66665)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy={132}
                          r="1.66667"
                          transform="rotate(180 2.66536 132)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 2.66536 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 2.66536 102.667)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy={88}
                          r="1.66667"
                          transform="rotate(180 2.66536 88)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 2.66536 73.3333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy={45}
                          r="1.66667"
                          transform="rotate(180 2.66536 45)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy={16}
                          r="1.66667"
                          transform="rotate(180 2.66536 16)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy={59}
                          r="1.66667"
                          transform="rotate(180 2.66536 59)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 2.66536 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 2.66536 1.66665)"
                          fill="#13C296"
                        />
                      </svg>
                    </span>
                    <span className="absolute -left-7 -bottom-7 z-[-1]">
                      <svg
                        width={107}
                        height={134}
                        viewBox="0 0 107 134"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="104.999"
                          cy={132}
                          r="1.66667"
                          transform="rotate(180 104.999 132)"
                          fill="#13C296"
                        />
                        <circle
                          cx="104.999"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 104.999 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="104.999"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 104.999 102.667)"
                          fill="#13C296"
                        />
                        <circle
                          cx="104.999"
                          cy={88}
                          r="1.66667"
                          transform="rotate(180 104.999 88)"
                          fill="#13C296"
                        />
                        <circle
                          cx="104.999"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 104.999 73.3333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="104.999"
                          cy={45}
                          r="1.66667"
                          transform="rotate(180 104.999 45)"
                          fill="#13C296"
                        />
                        <circle
                          cx="104.999"
                          cy={16}
                          r="1.66667"
                          transform="rotate(180 104.999 16)"
                          fill="#13C296"
                        />
                        <circle
                          cx="104.999"
                          cy={59}
                          r="1.66667"
                          transform="rotate(180 104.999 59)"
                          fill="#13C296"
                        />
                        <circle
                          cx="104.999"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 104.999 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="104.999"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 104.999 1.66665)"
                          fill="#13C296"
                        />
                        <circle
                          cx="90.3333"
                          cy={132}
                          r="1.66667"
                          transform="rotate(180 90.3333 132)"
                          fill="#13C296"
                        />
                        <circle
                          cx="90.3333"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 90.3333 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="90.3333"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 90.3333 102.667)"
                          fill="#13C296"
                        />
                        <circle
                          cx="90.3333"
                          cy={88}
                          r="1.66667"
                          transform="rotate(180 90.3333 88)"
                          fill="#13C296"
                        />
                        <circle
                          cx="90.3333"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 90.3333 73.3333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="90.3333"
                          cy={45}
                          r="1.66667"
                          transform="rotate(180 90.3333 45)"
                          fill="#13C296"
                        />
                        <circle
                          cx="90.3333"
                          cy={16}
                          r="1.66667"
                          transform="rotate(180 90.3333 16)"
                          fill="#13C296"
                        />
                        <circle
                          cx="90.3333"
                          cy={59}
                          r="1.66667"
                          transform="rotate(180 90.3333 59)"
                          fill="#13C296"
                        />
                        <circle
                          cx="90.3333"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 90.3333 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="90.3333"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 90.3333 1.66665)"
                          fill="#13C296"
                        />
                        <circle
                          cx="75.6654"
                          cy={132}
                          r="1.66667"
                          transform="rotate(180 75.6654 132)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy={132}
                          r="1.66667"
                          transform="rotate(180 31.9993 132)"
                          fill="#13C296"
                        />
                        <circle
                          cx="75.6654"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 75.6654 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 31.9993 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="75.6654"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 75.6654 102.667)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 31.9993 102.667)"
                          fill="#13C296"
                        />
                        <circle
                          cx="75.6654"
                          cy={88}
                          r="1.66667"
                          transform="rotate(180 75.6654 88)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy={88}
                          r="1.66667"
                          transform="rotate(180 31.9993 88)"
                          fill="#13C296"
                        />
                        <circle
                          cx="75.6654"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 75.6654 73.3333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 31.9993 73.3333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="75.6654"
                          cy={45}
                          r="1.66667"
                          transform="rotate(180 75.6654 45)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy={45}
                          r="1.66667"
                          transform="rotate(180 31.9993 45)"
                          fill="#13C296"
                        />
                        <circle
                          cx="75.6654"
                          cy={16}
                          r="1.66667"
                          transform="rotate(180 75.6654 16)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy={16}
                          r="1.66667"
                          transform="rotate(180 31.9993 16)"
                          fill="#13C296"
                        />
                        <circle
                          cx="75.6654"
                          cy={59}
                          r="1.66667"
                          transform="rotate(180 75.6654 59)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy={59}
                          r="1.66667"
                          transform="rotate(180 31.9993 59)"
                          fill="#13C296"
                        />
                        <circle
                          cx="75.6654"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 75.6654 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 31.9993 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="75.6654"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 75.6654 1.66665)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 31.9993 1.66665)"
                          fill="#13C296"
                        />
                        <circle
                          cx="60.9993"
                          cy={132}
                          r="1.66667"
                          transform="rotate(180 60.9993 132)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy={132}
                          r="1.66667"
                          transform="rotate(180 17.3333 132)"
                          fill="#13C296"
                        />
                        <circle
                          cx="60.9993"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 60.9993 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 17.3333 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="60.9993"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 60.9993 102.667)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 17.3333 102.667)"
                          fill="#13C296"
                        />
                        <circle
                          cx="60.9993"
                          cy={88}
                          r="1.66667"
                          transform="rotate(180 60.9993 88)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy={88}
                          r="1.66667"
                          transform="rotate(180 17.3333 88)"
                          fill="#13C296"
                        />
                        <circle
                          cx="60.9993"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 60.9993 73.3333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 17.3333 73.3333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="60.9993"
                          cy={45}
                          r="1.66667"
                          transform="rotate(180 60.9993 45)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy={45}
                          r="1.66667"
                          transform="rotate(180 17.3333 45)"
                          fill="#13C296"
                        />
                        <circle
                          cx="60.9993"
                          cy={16}
                          r="1.66667"
                          transform="rotate(180 60.9993 16)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy={16}
                          r="1.66667"
                          transform="rotate(180 17.3333 16)"
                          fill="#13C296"
                        />
                        <circle
                          cx="60.9993"
                          cy={59}
                          r="1.66667"
                          transform="rotate(180 60.9993 59)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy={59}
                          r="1.66667"
                          transform="rotate(180 17.3333 59)"
                          fill="#13C296"
                        />
                        <circle
                          cx="60.9993"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 60.9993 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 17.3333 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="60.9993"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 60.9993 1.66665)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 17.3333 1.66665)"
                          fill="#13C296"
                        />
                        <circle
                          cx="46.3333"
                          cy={132}
                          r="1.66667"
                          transform="rotate(180 46.3333 132)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy={132}
                          r="1.66667"
                          transform="rotate(180 2.66536 132)"
                          fill="#13C296"
                        />
                        <circle
                          cx="46.3333"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 46.3333 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 2.66536 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="46.3333"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 46.3333 102.667)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 2.66536 102.667)"
                          fill="#13C296"
                        />
                        <circle
                          cx="46.3333"
                          cy={88}
                          r="1.66667"
                          transform="rotate(180 46.3333 88)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy={88}
                          r="1.66667"
                          transform="rotate(180 2.66536 88)"
                          fill="#13C296"
                        />
                        <circle
                          cx="46.3333"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 46.3333 73.3333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 2.66536 73.3333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="46.3333"
                          cy={45}
                          r="1.66667"
                          transform="rotate(180 46.3333 45)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy={45}
                          r="1.66667"
                          transform="rotate(180 2.66536 45)"
                          fill="#13C296"
                        />
                        <circle
                          cx="46.3333"
                          cy={16}
                          r="1.66667"
                          transform="rotate(180 46.3333 16)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy={16}
                          r="1.66667"
                          transform="rotate(180 2.66536 16)"
                          fill="#13C296"
                        />
                        <circle
                          cx="46.3333"
                          cy={59}
                          r="1.66667"
                          transform="rotate(180 46.3333 59)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy={59}
                          r="1.66667"
                          transform="rotate(180 2.66536 59)"
                          fill="#13C296"
                        />
                        <circle
                          cx="46.3333"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 46.3333 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 2.66536 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="46.3333"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 46.3333 1.66665)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 2.66536 1.66665)"
                          fill="#13C296"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ====== Contact Section End */}
      </>
    </>
  );
};

export default AddJob;
