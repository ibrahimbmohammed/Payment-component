import { MdOutlineReceiptLong } from "react-icons/md";
import { AiFillApple } from "react-icons/ai";

const CheckoutCard = () => {
  return (
    <div className="relative">
      <div className="h-[2rem] w-[2rem] absolute top-[78%] -left-[1rem]  z-10 bg-white rounded-full" />
      <div className="h-[2rem] w-[2rem] absolute top-[78%] -right-[1rem]  z-10 bg-white rounded-full" />

      <div className="h-[23.5rem] w-[17rem] rounded-lg mt-[4rem]  bg-[#EFF5F9] flex flex-col items-center justify-end">
        <div className="flex flex-col  text-[#2D3753] text-sm space-y-3 w-[80%] pb-[1rem]">
          <div className="flex items-center justify-between space-x-4">
            <p className="">Company</p>
            <span className="flex  items-center space-x-[1rems]">
              <span className="bg-[#202E52] rounded-full  flex items-center justify-center ">
                <AiFillApple className="text-[#F7F7FA] text-md px-[0.2px] py-[0.8px]" />
              </span>
              <p className="font-semibold pl-2">Apple</p>
            </span>
          </div>
          <div className="flex items-center justify-between space-x-4">
            <p className="">Order Number</p>
            <p className="font-semibold">1266201</p>
          </div>
          <div className="flex items-center justify-between space-x-4">
            <p className="">Product</p>
            <p className="font-semibold">MacBook Air</p>
          </div>
          <div className="flex items-center justify-between space-x-4">
            <p className=""> VAT(20%)</p>
            <p className="font-semibold"> $100.00</p>
          </div>
        </div>
      </div>
      <div className="h-[7rem]  border-t-2 border-dashed border-[#D4D9E3] ">
        <div className="flex h-full items-center justify-between bg-[#EFF5F9]  rounded-lg text-[#2D3753] text-sm space-y-1 px-[1.7rem]">
          <div className="flex flex-col items-start">
            <p className="text-xs">you have to pay</p>
            <span className="flex items-center justify-end">
              <p className="font-bold text-xl">549 </p>
              <p className="">.99 USD</p>
            </span>
          </div>
          <MdOutlineReceiptLong className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default CheckoutCard;
