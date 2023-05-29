import VitualCard from "@components/molecules/m-virtual-card";
import CheckoutCard from "@components/molecules/m-checkout-card";

interface CheckoutSectionProps {
  renderCardLogo: () => null | React.ReactNode;
}
const CheckoutSection = ({ renderCardLogo }: CheckoutSectionProps) => {
  return (
    <aside className="flex flex-col relative justify-start items-center space-y-[1rem] flex-[35%]">
      <div className="w-[4rem] h-[1rem] bg-primaryBlue mt-3" />
      <VitualCard renderCardLogo={renderCardLogo} />
      <CheckoutCard />
    </aside>
  );
};

export default CheckoutSection;
