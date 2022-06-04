import numToWon from "utils/utils";

import PriceSelectArea from "../../ModalInnerItems/ReservationFeeModal/PriceSelectArea";
import ButtonArea from "../ButtonArea/ButtonArea";
import SelectItem, { WhiteSpace, SelectItemProps } from "./SelectItem";

const buttonId = "reservation-fee-button";
const initialPrice = {
  minPrice: 10000,
  maxPrice: 10000000,
};

const ReservationFee = ({
  anchorEl,
  onClick,
  onClose,
}: SelectItemProps): JSX.Element => {
  const isOpen = anchorEl?.id === buttonId;
  // TODO: API사용시 API로부터 받아온 min, maxPrice로 변경
  const minPrice = 10000;
  const maxPrice = 10000000;

  const description =
    minPrice !== initialPrice.minPrice && maxPrice !== initialPrice.maxPrice
      ? `${numToWon(minPrice)}~${numToWon(maxPrice)}`
      : "금액대 설정";

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
