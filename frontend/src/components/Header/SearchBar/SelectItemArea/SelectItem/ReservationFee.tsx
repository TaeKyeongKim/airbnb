import { useContext, useState } from "react";

import { QueryContexts } from "contexts/QueryContexts";
import numToWon from "utils/utils";

import PriceSelectArea from "../../ModalInnerItems/ReservationFeeModal/PriceSelectArea";
import ButtonArea from "../ButtonArea/ButtonArea";
import SelectItem, { WhiteSpace, SelectItemProps } from "./SelectItem";

const buttonId = "reservation-fee-button";
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
  const [{ minPrice, maxPrice } /* setPriceRange */] = useState(initialPrice);

  const isQueryDataIncludesPriceRange =
    queryData.minPrice || queryData.maxPrice;

  const description =
    !isQueryDataIncludesPriceRange &&
    minPrice === initialPrice.minPrice &&
    maxPrice === initialPrice.maxPrice
      ? "금액대 설정"
      : `${numToWon(minPrice)}~${numToWon(maxPrice)}`;

  const isOpen = anchorEl?.id === buttonId;
  return (
    <>
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
        <PriceSelectArea initialPrice={initialPrice} />
      </SelectItem>
      {(isOpen && <ButtonArea icon="close" divide />) || (
        <WhiteSpace divide xs={1} />
      )}
    </>
  );
};

export default ReservationFee;
