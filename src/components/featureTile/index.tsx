import { Feature } from "../../types";

const FeatureTile = ({ data }: { data: Feature }) => {
  return (
    <div
      className="col-span-1 flex flex-col lg:flex-row items-center lg:items-start p-4 lg:p-6 group relative shadow-[0px_2px_4px_0px_rgba(0,0,0,0.06)] lg:shadow-none lg:hover:shadow-[0px_2px_4px_0px_rgba(0,0,0,0.06)] transition-shadow duration-300"
    >
      <div className="flex-shrink-0 mb-2 lg:mb-0 lg:mr-4">
        <img src={data.icon} alt={`${data.feature} icon`} className="w-8 h-8" />
      </div>

      <div className="text-center lg:text-left flex align-center flex-col justify-center">
        <div className="heading-5 text-[14px] lg:text-[18px] font-medium transition-all duration-300 group-hover:translate-y-[-10px] group-hover:translate-x-[5px]">
          {data?.feature}
        </div>
        <div className="hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px] lg:text-[10px] text-gray-600">
          One liner details about the feature
        </div>
      </div>
    </div>
  );
};

export default FeatureTile;