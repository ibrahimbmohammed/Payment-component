import { FcCancel } from "react-icons/fc";
import { HiCheckBadge } from "react-icons/hi2";

interface CardCheckLogoProps {
  number: string;
  renderCardLogo: () => null | React.ReactNode;
}

const CardCheckLogo = ({ number, renderCardLogo }: CardCheckLogoProps) => {
  if (number.length === 0) return null;
  return !renderCardLogo() && number.length >= 2 ? (
    <FcCancel
      className="text-[#1BA3EE] text-3xl absolute right-2 sm:right-4  top-3 sm:top-4"
      data-testid="card-check-logo-cancel"
    />
  ) : (
    <HiCheckBadge
      className="text-[#1BA3EE] text-3xl absolute right-2 sm:right-4  top-3 sm:top-4"
      data-testid="card-check-logo"
    />
  );
};

export default CardCheckLogo;
