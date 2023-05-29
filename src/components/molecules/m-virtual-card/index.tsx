import sim from "@assets/images/webp/icon.webp";
import { FiWifi } from "react-icons/fi";

interface VitualCardProps {
  renderCardLogo: () => null | React.ReactNode;
}
const VitualCard = ({ renderCardLogo }: VitualCardProps) => {
  return (
    <div
      className="absolute px-[1rem] py-[2rem] justify-between space-y-4 flex flex-col top-0 z-10 h-[19rem] w-[12.5rem]  bg-gradient-to-t from-white to-white/40 rounded-xl drop-shadow-2xl  bg-clip-padding"
      style={{ backdropFilter: "blur(10px)" }}
    >
      <div className="flex items-center justify-between">
        <img
          src={sim}
          alt="sim card image"
          className="h-[2.5rem] w-[2.5rem] rotate-90"
        />
        <FiWifi className="text-textPurple text-2xl" />
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col items-start">
          <p className="text-textPurple text-xs font-[500]">Jonathan Michael</p>
          <div className="flex space-x-2 items-end">
            <p className="text-[#2C3652] font-extrabold text-2xl">....</p>
            <p className="text-[#2C3652] font-[700] text-sm">3456</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-textPurple font-semibold text-xs">9/22</p>
          <div className="h-[2rem] w-[2.8rem]">{renderCardLogo()}</div>
        </div>
      </div>
    </div>
  );
};

export default VitualCard;
