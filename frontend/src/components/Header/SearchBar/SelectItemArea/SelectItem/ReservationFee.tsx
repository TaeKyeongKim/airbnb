import { SelectItemProps } from "@types";

import ButtonArea from "../ButtonArea/ButtonArea";
import SelectItem, { WhiteSpaceCloseButtonSize } from "./SelectItem";

const ReservationFee = ({
  setAnchorEl,
  anchorEl,
}: SelectItemProps): JSX.Element => {
  const open = Boolean(anchorEl);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <SelectItem
        gridStyle={{
          xs: 2,
          pl: 2,
        }}
        buttonId="reservation-fee-button"
        buttonAreaLabel="숙박요금 설정"
        title="요금"
        desc="금액대 설정"
        modalAnchorStyle={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        handleClick={handleClick}
        handleClose={handleClose}
        createNewPopup
        anchorEl={anchorEl}
      >
        요금 금액 설정 영역
      </SelectItem>
      {(open && <ButtonArea icon="close" divide />) || (
        <WhiteSpaceCloseButtonSize divide xs={1} />
      )}
    </>
  );
};

export default ReservationFee;
