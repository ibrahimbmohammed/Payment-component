import { RxCross2 } from "react-icons/rx";

const CardHeader = () => {
  return (
    <div className="flex  items-center justify-end cursor-pointer">
      <div className="py-2 px-3 bg-[#F9FBFC]">
        <RxCross2 className="text-[#2A2E33] text-lg" />
      </div>
    </div>
  );
};

export default CardHeader;
