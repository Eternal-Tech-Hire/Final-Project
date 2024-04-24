import { CompanyTypes, User } from "@/types";
import Link from "next/link";

const CardProfile = ({data} : {data : User}) => {
  return (
    <><Link href={`http://localhost:3000/profile/${data._id}`}>
      <div className="bg-gray-200 font-sans h-72 w-full flex flex-row justify-center items-center my-5 rounded-xl">
        <div className="card w-96 mx-auto bg-white  shadow-xl hover:shadow">
          <img
            className="w-32 mx-auto rounded-full -mt-20 border-8 border-white"
            src="https://avatars.githubusercontent.com/u/67946056?v=4"
            alt=""
          />
          <div className="text-center mt-2 text-3xl font-medium">{data.name}</div>
          <div className="text-center mt-2 font-light text-sm">{data.email}</div>
          <div className="text-center font-normal text-lg">Kerala</div>
          <div className="px-6 text-center mt-2 font-light text-sm">
            <p>
              Front end Developer, avid reader. Love to take a long walk, swim
            </p>
          </div>
        </div>
      </div>
      </Link>
    </>
  );
};

export default CardProfile;