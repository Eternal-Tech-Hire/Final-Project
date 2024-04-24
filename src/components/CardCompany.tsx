import { CompanyTypes } from "@/types";

const CardCompany = ({ data }: { data: CompanyTypes }) => {
  console.log(data, "<<<>>>>>");

  return (
    <>
      <div className="rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <img
            src={data?.companyLogo}
            alt="Company Logo"
            className="h-16 w-16 mr-2"
          />
          {/* Judul */}
          <div className="font-bold text-xl">{data?.name}</div>
        </div>
        <div className="px-6 pt-4 pb-2">
          <p className="text-gray-700 text-base">{data?.jobOffer}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {data && data?.fields.map((el) => (
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #{el}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardCompany;
