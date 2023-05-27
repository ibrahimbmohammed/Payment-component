import type { CreditCardType } from "credit-card-type/dist/types";
import logo from "@assets/images/png/logo1.png";
import { ChangeEvent } from "react";
import CardFormSection from "@components/CardFormSection";

interface CardInformationSectionProps {
  number: string;
  cardType: CreditCardType | null;
  renderCardLogo: () => null | React.ReactNode;
  handleNumberChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
const CardInformationSection = ({
  number,
  cardType,
  renderCardLogo,
  handleNumberChange,
}: CardInformationSectionProps) => {
  return (
    <div className="flex flex-[65%] flex-col space-y-8">
      <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row space-x-[1rem] items-center justify-between pb-[0.4rem]">
        <div className="image flex items-center justify-center space-x-[1rem]">
          <img
            src={logo}
            alt="web page logo"
            className="h-[2.7rem] w-[2.7rem] "
          ></img>
          <span className="flex">
            <p className="text-[#1B2A4C] font-[700] text-xl">AceCoin</p>
            <p className="text-[#1B2A4C] font-light text-xl">Pay</p>
          </span>
        </div>
        <div className="flex space-x-[0.1rem]">
          <span className="bg-bgPurple max-h-[2.6rem] w-[1.6rem] flex items-center rounded-[0.25rem] justify-center  py-1">
            <p className="font-semibold text-lg">0</p>
          </span>
          <span className="bg-bgPurple max-h-[2.6rem] w-[1.6rem] flex items-center rounded-[0.25rem] justify-center  py-1">
            <p className="font-semibold text-lg">1</p>
          </span>
          <div className="flex items-center justify-center  max-h-[2.6rem] px-[0.1rem]">
            <p className="text-black font-semibold">:</p>
          </div>
          <span className="bg-bgPurple max-h-[2.6rem] w-[1.6rem] flex items-center rounded-[0.25rem] justify-center  py-1">
            <p className="font-semibold text-lg">1</p>
          </span>
          <span className="bg-bgPurple max-h-[2.6rem] w-[1.6rem] flex items-center rounded-[0.25rem] justify-center  py-1">
            <p className="font-semibold text-lg">9</p>
          </span>
        </div>
      </div>
      <CardFormSection
        number={number}
        cardType={cardType}
        renderCardLogo={renderCardLogo}
        handleNumberChange={handleNumberChange}
      />
    </div>
  );
};

export default CardInformationSection;
