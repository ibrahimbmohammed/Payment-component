import CardCheckLogo from "@components/CardCheckLogo";
import Input from "@components/CardInuput";
import { CreditCardType } from "credit-card-type/dist/types";
import { ChangeEvent } from "react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { RiPencilFill } from "react-icons/ri";

interface CardFormSectionProps {
  number: string;
  cardType: CreditCardType | null;
  renderCardLogo: () => null | React.ReactNode;
  handleNumberChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
const CardFormSection = ({
  number,
  cardType,
  renderCardLogo,
  handleNumberChange,
}: CardFormSectionProps) => {
  return (
    <form className="flex flex-col space-y-8">
      <div className="edit flex items-center space-x-[1rem] justify-between">
        <div className="flex flex-col items-start space-y-2">
          <p className="font-semibold text-[#1B2A4C] text-sm sm:text-md">
            Card Number
          </p>
          <p className="text-[#B0B3BF] text-xs sm:text-md">
            Enter the 16-digit card number on the card
          </p>
        </div>
        <div className="edit flex space-x-2">
          <span className="">
            <RiPencilFill className="text-[#1364F6] font-bolg text-sm sm:text-xl" />
          </span>
          <p className="text-[#1364F6]  text-xs font-[500]">Edit</p>
        </div>
      </div>
      <div className="flex flex-col space-x-[1rem] relative">
        <Input
          className={`${
            !renderCardLogo() && number?.length >= 2
              ? "border border-red-500"
              : "border"
          } text-[#B8BDCD] bg-[#F9FBFC] pl-14 sm:pl-[5.5rem]   px-[0.4rem] outline-none placeholder:text-[#BEC4D2]  transition-colors delay-100 ease-in-out focus:outline-[#F9FBFC] focus:outline-offset-0 focus:bg-[#F9FBFC] focus:text-[#B8BDCD] focus:placeholder:text-[#B8BDCD]`}
          type="text"
          maxLength={31}
          value={number}
          onChange={handleNumberChange}
          placeholder="Enter credit card number"
          dataTestId="card-number-input"
        />
        <CardCheckLogo number={number} renderCardLogo={renderCardLogo} />
        <div className=" absolute left-0 top-4">
          {renderCardLogo && renderCardLogo()}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center sm:space-x-[1rem] justify-between">
        <div className="flex flex-col items-start space-y-2  w-full sm:flex-[45%]">
          <p className="font-semibold text-sm sm:text-md text-[rgb(27,42,76)]">
            CVV Number
          </p>
          <p className="text-[#B0B3BF] text-xs sm:text-sm">
            Enter the 3 or 4 digit number on the card
          </p>
        </div>
        <div className="relative flex-[55%] w-full ">
          <Input
            type="text"
            maxLength={cardType?.code?.size ?? 3}
            placeholder="Enter CVV"
            dataTestId="card-number-cvv"
          />
          <BsFillGrid3X3GapFill className="text-[#A4AAB8] peer-focus:text-primaryBlue focus-within:text-red text-2xl absolute right-2 sm:right-4  top-4 sm:top-5" />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center sm:space-x-[1rem] justify-between">
        <div className="flex flex-col items-start space-y-2 w-full sm:flex-[45%]">
          <p className="font-semibold text-sm sm:text-md text-[#1B2A4C]">
            Expiry Date
          </p>
          <p className="text-[#B0B3BF] text-xs sm:text-sm">
            Enter the expiration date of the card
          </p>
        </div>
        <div className="flex space-x-2 items-center justify-center flex-[55%] w-full">
          <Input type="number" placeholder="09" dataTestId="card-number-exp1" />
          <p className="font-semibold text-black text-xl px-4">/</p>

          <Input type="number" placeholder="23" dataTestId="card-number-exp2" />
        </div>
      </div>
      <div className="input flex flex-col sm:flex-row items-center sm:space-x-[1rem] justify-between">
        <div className="flex flex-col items-start space-y-2 w-full sm:flex-[45%]">
          <p className="font-semibold text-sm sm:text-md text-[#1B2A4C]">
            Password
          </p>
          <p className="text-[#B0B3BF] text-xs sm:text-sm">
            Enter your Dynamic Password
          </p>
        </div>
        <div className="relative flex-[55%] w-full">
          <Input
            type="password"
            placeholder="Enter Password"
            dataTestId="card-number-password"
          />
          <BsFillGrid3X3GapFill className="text-[#A4AAB8] peer-focus:text-primaryBlue text-2xl absolute  right-2 sm:right-4  top-4 sm:top-5" />
        </div>
      </div>
      <div className="w-full">
        <button
          className="text-white font-semibold w-full  text-md rounded-md bg-primaryBlue py-[1.15rem] px-[0.4rem] "
          type="button"
        >
          Pay Now
        </button>
      </div>
    </form>
  );
};

export default CardFormSection;
