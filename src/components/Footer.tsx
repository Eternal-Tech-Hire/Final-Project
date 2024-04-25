import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

const Footer = () => {
  return (
    <>
      <div className="relative -mt-1 bg-gray-800">
        <svg
          className="absolute top-0 w-full h-8 -mt-5 sm:-mt-10 sm:h-16 text-deep-purple-accent-400"
          preserveAspectRatio="none"
          viewBox="0 0 1440 54"
        >
          <path
            fill="currentColor"
            d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
          />
        </svg>
        <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="grid gap-1 row-gap-10 mb-8 lg:grid-cols-6">
            <div className="md:max-w-md lg:col-span-2 flex flex-col lg:items-start items-center mb-10 lg:mb-0 justify-center mr-10 pl-20">
              <img
                src="/logo_v2.png"
                loading="lazy"
                style={{ color: "transparent" }}
                className="w-48"
              />
              <div className="text-gray-100 text-sm mt-5 flex items-center">
                <AiOutlineMail className="mr-2" />
                <p>Email: example@example.com</p>
              </div>
              <div className="text-gray-100 text-sm mt-2 flex items-center">
                <AiOutlinePhone className="mr-2" />
                <p>Phone: 123-456-7890</p>
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="">
                <h1 className="text-white font-bold text-lg md:text-xl lg:text-2xl mb-2">
                  About Us
                </h1>
                <p className="text-sm text-gray-100">
                  "Eternal Tech Hire" Job Fair / Job Market Service is more than
                  just a platform – it's a dynamic hub that connects talented
                  job seekers with forward-thinking employers. Our mission is to
                  bridge the gap between aspiring professionals and innovative
                  companies, facilitating meaningful connections that drive
                  career growth and organizational success. <br />
                  At "Eternal Tech Hire," we believe in the power of talent,
                  diversity, and opportunity. Our platform is designed to
                  empower individuals to showcase their skills and expertise
                  while providing employers with access to a diverse pool of
                  exceptional candidates. Whether you're a job seeker looking to
                  take the next step in your career or an employer seeking
                  top-tier talent, "Eternal Tech Hire" is your trusted partner
                  in navigating the ever-evolving job market landscape.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
            <div className="text-sm text-gray-100 flex-1">
              <p>Eternal Tech Hire © Copyright 2024 All Rights Reserved</p>
            </div>
            <div className="flex items-center mt-4 space-x-4 sm:mt-0">
              <a
                href="/"
                className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                </svg>
              </a>
              <a
                href="/"
                className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
              >
                <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                  <circle cx="15" cy="15" r="4" />
                  <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                </svg>
              </a>
              <a
                href="/"
                className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
