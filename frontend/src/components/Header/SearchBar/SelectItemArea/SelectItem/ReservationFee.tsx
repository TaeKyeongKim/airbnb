import { useState, useContext, useMemo } from "react";

import { QueryContexts } from "contexts/QueryContexts";
import { PriceRangeContext } from "contexts/contexts";
import numToWon from "utils/utils";

import PriceSelectArea from "../../ModalInnerItems/ReservationFeeModal/PriceSelectArea";
import ButtonArea from "../ButtonArea/ButtonArea";
import SelectItem, { WhiteSpace, SelectItemProps } from "./SelectItem";

const buttonId = "reservation-fee-button";

const INITIAL_PRICE_PERCENTAGE = {
  min: 0,
  max: 100,
};

// TODO: API사용시 API로부터 받아온 min, maxPrice로 변경
const initialPrice = {
  minPrice: 10000,
  maxPrice: 10000000,
};

const ReservationFee = ({
  anchorEl,
  onClick,
  onClose,
}: SelectItemProps): JSX.Element => {
  const queryData = useContext(QueryContexts);

  const [price, setPrice] = useState({
    min: initialPrice.minPrice,
    max: initialPrice.maxPrice,
  });
  const [percentage, setPercentage] = useState({
    min: INITIAL_PRICE_PERCENTAGE.min,
    max: INITIAL_PRICE_PERCENTAGE.max,
  });

  const isQueryDataIncludesPriceRange =
    queryData.minPrice || queryData.maxPrice;

  const description =
    !isQueryDataIncludesPriceRange &&
    percentage.min === INITIAL_PRICE_PERCENTAGE.min &&
    percentage.max === INITIAL_PRICE_PERCENTAGE.max
      ? "금액대 설정"
      : `${numToWon(initialPrice.minPrice)}~${numToWon(initialPrice.maxPrice)}`;

  const isOpen = anchorEl?.id === buttonId;
  return (
    <PriceRangeContext.Provider
      value={useMemo(
        () => ({
          priceRange: { price, percentage },
          setPriceRange: {
            setPrice,
            setPercentage,
          },
        }),
        [price, percentage, setPrice, setPercentage]
      )}
    >
      <SelectItem
        gridStyle={{
          xs: 2,
          pl: 2,
        }}
        buttonId={buttonId}
        buttonAreaLabel="숙박요금 설정"
        title="요금"
        desc={description}
        open={isOpen}
        handleClick={onClick}
        handleClose={onClose}
        createNewPopup
        anchorEl={anchorEl}
      >
        <PriceSelectArea /* initialPrice={initialPrice}  */ />
      </SelectItem>
      {(isOpen && <ButtonArea icon="close" divide />) || (
        <WhiteSpace divide xs={1} />
      )}
    </PriceRangeContext.Provider>
  );
};

export default ReservationFee;
