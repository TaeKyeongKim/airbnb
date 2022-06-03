import { createContext, useState } from "react";

const PriceSelectContext = createContext<PriceSelectContextType | null>(null);

const SearchBarContexts = ({ children }: { children: React.ReactNode }) => {
  const [accomodationPrice, setAccomodationPrice] = useState({
    minPrice: 10000,
    maxPrice: 10000000,
  });
  return (
    <PriceSelectContext.Provider
      value={{ accomodationPrice, setAccomodationPrice }}
    >
      {children}
    </PriceSelectContext.Provider>
  );
};

export default SearchBarContexts;

interface AccomodationPriceType {
  minPrice: number;
  maxPrice: number;
}

interface PriceSelectContextType {
  accomodationPrice: AccomodationPriceType;
  setAccomodationPrice: React.Dispatch<
    React.SetStateAction<AccomodationPriceType>
  >;
}
