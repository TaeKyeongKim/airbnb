import ButtonArea from "./ButtonArea/ButtonArea";
import SelectItem from "./SelectItem/SelectItem";
import SelectItemAreaWrapper from "./SelectItemArea.style";
import SelectItemTemplate from "./SelectItemTemplate/SelectItemTemplate";

const SelectItemArea = (): JSX.Element => {
  return (
    <SelectItemAreaWrapper container columns={12}>
      <SelectItem
        selectItemData={{
          gridStyle: {
            xs: 2,
          },
          buttonId: "check-in-date-button",
          buttonAreaLabel: "체크인 날짜 설정",
          title: "안녕하세요",
          desc: "호톨비",
          modalAnchorStyle: {
            vertical: "bottom",
            horizontal: "left",
          },
          children: "테스트용 문구",
        }}
      />
      <SelectItemTemplate xs={2} pl={1}>
        반갑습니다
      </SelectItemTemplate>
      <ButtonArea icon="close" divide />
      <SelectItemTemplate xs={2} pl={1}>
        안녕하세욥
      </SelectItemTemplate>
      <ButtonArea icon="close" divide />
      <SelectItemTemplate xs={2} pl={1}>
        하하
      </SelectItemTemplate>
      <ButtonArea icon="close" />
      <ButtonArea icon="search" />
    </SelectItemAreaWrapper>
  );
};

export default SelectItemArea;
