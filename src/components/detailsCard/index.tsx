import {
  KeyboardDoubleArrowRightOutlined,
} from "@mui/icons-material";
import Direction from "../../assets/directions.svg";
import { WorkspaceCardData } from "../../types";

const DetailsCard = ({ data }: { data: WorkspaceCardData }) => {
  const handleDirectionClick = () => {
    if (data.google_maps_url) {
      window.open(data.google_maps_url, "_blank"); // Open the URL in a new tab
    }
  };

  return (
    <div className="lg:p-4 p-2 bg-white border-[1px] border-[#EEE7E7CC] rounded-lg shadow-[0px_1px_9px_0px_#0000000F] max-w-[400px] h-full flex flex-col"> {/* Added h-full and flex */}
      <div className="grid grid-cols-5 justify-between gap-x-2 items-center">
        <p className="col-span-4 heading-4 text-main break-words">{data.name}</p>
        <div
          className="col-span-1 w-[52px] h-[52px] bg-[#F9F9F9] border-[0.5px] border-[#EEE7E7] rounded-lg flex justify-center items-center cursor-pointer"
          onClick={handleDirectionClick}
        >
          <img src={Direction} alt="Directions" />
        </div>
      </div>
      <img
        className="w-full h-auto lg:h-[250px] rounded-lg my-4 object-cover"
        src={data.image}
        alt="working-space"
      />
      <div className="grid grid-cols-2 gap-x-4 mt-auto">
        <div className="flex justify-between items-center bg-[#F9F9F9] border-[0.5px] border-[#EEE7E7] rounded-lg p-2 cursor-pointer">
          <div>
            <p className="text-secondary text-[14px]">Day Pass</p>
            <p className="text-main heading-4 lg:text-[20px] text-[18px]">
              ₹ {data.day_pass_price}
              <span className="text-secondary text-[10px] font-medium">
                /Day
              </span>
            </p>
          </div>
          <KeyboardDoubleArrowRightOutlined />
        </div>
        <div className="flex justify-between items-center bg-[#FFCF4B] border-[0.5px] border-[#FFC422] rounded-lg p-2 cursor-pointer">
          <div>
            <p className="text-secondary text-[14px]">Bulk Pass</p>
            <p className="text-main heading-4 lg:text-[20px] text-[18px]">
              ₹ 2400
              <span className="text-secondary text-[10px] font-medium">
                /10 Days
              </span>
            </p>
          </div>
          <KeyboardDoubleArrowRightOutlined />
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
