import { useContext } from "react";

import { SearchBarStateContext } from "contexts/contexts";

import ButtonArea from "../ButtonArea/ButtonArea";
import SelectItem, { SelectItemProps, WhiteSpace } from "./SelectItem";

const buttonId = "people-count-button";

const PeopleCount = ({
  onClick,
  onClose,
  anchorEl,
}: SelectItemProps): JSX.Element => {
  const { isSearchBarFullSize } = useContext(SearchBarStateContext)!;

  const isOpen = anchorEl?.id === buttonId;

  return (
    <>
      <SelectItem
        gridStyle={
          isSearchBarFullSize
            ? {
                xs: 2,
                pl: 2,
              }
            : {
                xs: 3,
                pl: 1,
              }
        }
        buttonId={buttonId}
        buttonAreaLabel="숙박 인원 설정"
        title="인원"
        desc={isSearchBarFullSize ? "게스트 추가" : "인원 입력"}
        open={isOpen}
        handleClick={
          // peoplecount모달도 open상태로 되면 좋음.
          isSearchBarFullSize
            ? onClick
            : () => {
                /* setIsSearchBarFullSize(true) */
              }
        }
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
