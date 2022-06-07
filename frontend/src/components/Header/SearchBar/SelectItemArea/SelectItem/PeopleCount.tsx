import { useContext } from "react";

import { LocationContext } from "router/Contexts";

import ButtonArea from "../ButtonArea/ButtonArea";
import SelectItem, { SelectItemProps, WhiteSpace } from "./SelectItem";

const buttonId = "people-count-button";

const PeopleCount = ({
  onClick,
  onClose,
  anchorEl,
}: SelectItemProps): JSX.Element => {
  const { pathname } = useContext(LocationContext)!;

  const isOpen = anchorEl?.id === buttonId;

  return (
    <>
      <SelectItem
        gridStyle={{
          xs: 2,
          pl: 2,
        }}
        buttonId={buttonId}
        buttonAreaLabel="숙박 인원 설정"
        title="인원"
        desc={pathname === "/" ? "게스트 추가" : "인원 입력"}
        open={isOpen}
        handleClick={onClick}
        anchorEl={anchorEl}
        handleClose={onClose}
        createNewPopup
      >
        인원조정영역
      </SelectItem>
      {(isOpen && <ButtonArea icon="close" />) || <WhiteSpace xs={1} />}
    </>
  );
};

export default PeopleCount;
