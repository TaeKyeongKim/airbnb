import { SelectItemProps } from "@types";

import ButtonArea from "../ButtonArea/ButtonArea";
import SelectItem, { WhiteSpaceCloseButtonSize } from "./SelectItem";

const PeopleCount = ({
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
        title="인원"
        desc="게스트 추가"
        modalAnchorStyle={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        handleClick={handleClick}
        anchorEl={anchorEl}
        handleClose={handleClose}
        createNewPopup
      >
        인원조정영역
      </SelectItem>
      {(open && <ButtonArea icon="close" />) || (
        <WhiteSpaceCloseButtonSize xs={1} />
      )}
    </>
  );
};

export default PeopleCount;
