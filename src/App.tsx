import type { CreditCardType } from "credit-card-type/dist/types";
import creditCardType from "credit-card-type";
import { ChangeEvent, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { detectCardType, formatCreditCardNumber } from "@lib/utils";
import "./App.css";
import CardInformationSection from "@components/CardInfoSection";
import CheckoutSection from "@components/CheckoutSection";

function App() {
  const [number, setNumber] = useState("");
  const [cardType, setCardType] = useState<CreditCardType | null>(null);
  creditCardType.changeOrder(creditCardType.types.VISA, 1);

  const handleNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const formattedValue = formatCreditCardNumber(value);
    const detectedCardType = detectCardType(value, creditCardType);
    setCardType(detectedCardType);
    setNumber(formattedValue);
  };

  const renderCardLogo = () => {
    if (cardType) {
      return (
        <img
          className="h-[1.2rem] w-[1.8rem] sm:h-[2rem] sm:w-[2.8rem]"
          src={`./src/assets/images/png/${cardType.type}.png`}
          alt={cardType.type}
          data-testid="card-logo"
        />
      );
    } else if (!cardType && number.length === 0) {
      return (
        <img
          className="h-[2rem] w-[2.8rem]"
          src={`./src/assets/images/png/mastercard.png`}
          alt="mastercard logo"
          data-testid="master-card"
        />
      );
    }
    return null;
  };

  return (
    <main className="bg-white" data-testid="app">
      <div className="flex  items-center justify-end cursor-pointer">
        <div className="py-2 px-3 bg-[#F9FBFC]">
          <RxCross2 className="text-[#2A2E33] text-lg" />
        </div>
      </div>
      <div className="bg-white px-[0.7rem] sm:pl-[3rem]  sm:pr-[0rem] py-[1rem]">
        <div className="main flex flex-col lg:flex-row sm:space-x-4 space-y-6 sm:space-y-0">
          <CardInformationSection
            number={number}
            cardType={cardType}
            renderCardLogo={renderCardLogo}
            handleNumberChange={handleNumberChange}
          />
          <CheckoutSection renderCardLogo={renderCardLogo} />
        </div>
      </div>
    </main>
  );
}

export default App;
