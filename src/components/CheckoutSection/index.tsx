import VitualCard from "@components/VirtualCard";
import CheckoutCard from "@components/CheckoutCard";

interface CheckoutSectionProps {
  renderCardLogo: () => null | React.ReactNode;
}
const CheckoutSection = ({ renderCardLogo }: CheckoutSectionProps) => {
  return (
    <aside className="flex flex-col relative justify-start items-center space-y-[1rem] flex-[35%]">
      <div className="w-[4rem] h-[1rem] bg-[#1364FA] mt-3" />
      <VitualCard renderCardLogo={renderCardLogo} />
      <CheckoutCard />
    </aside>
  );
};

export default CheckoutSection;
