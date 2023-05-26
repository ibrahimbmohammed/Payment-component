import type { CreditCardType } from "credit-card-type/dist/types";

export const detectCardType = (
  value: string,
  creditCardType: (cardNumber: string) => CreditCardType[]
): CreditCardType | null => {
  const cleanedValue = value.replace(/\s/g, "");
  const detectedCards = creditCardType(cleanedValue);

  if (detectedCards.length > 0) {
    return detectedCards[0];
  }

  return null;
};

export const formatCreditCardNumber = (value: string): string => {
  // Remove non-digit characters from the input value
  const cleanedValue = value.replace(/[^\d]/g, "");

  // Split the input value into groups of four digits
  const groups = cleanedValue.match(/.{1,4}/g);

  // Join the groups with dashes in between
  return groups ? groups.join("  -  ") : cleanedValue;
};
