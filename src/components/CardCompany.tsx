import { CompanyTypes } from "@/types";

const CardCompany = ({data} : {data : CompanyTypes}) => {

    return (
      <>
        <div className="rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{data?.name}</div>
            <p className="text-gray-700 text-base">
              {data?.jobOffer} === Job Offer
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Technology
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Software Engineering
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Web Development
            </span>
          </div>
        </div>
      </>
    );
  };
  
  export default CardCompany;