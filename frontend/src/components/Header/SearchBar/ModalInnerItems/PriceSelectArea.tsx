import { useContext } from "react";

import { Box } from "@mui/material";

import numToWon from "utils/utils";

import { PriceSelectContext } from "../Context/SearchBarContexts";

const average1DayPrice = 165556;

const PriceSelectArea = () => {
  // TODO: 데이터로 수정
  const { accomodationPrice /* setAccomodationPrice */ } =
    useContext(PriceSelectContext);

  const { minPrice, maxPrice } = accomodationPrice;

  return (
    <Box component="section">
      <h2>가격 범위</h2>
      <p>
        ₩{numToWon(minPrice)} - ₩{numToWon(maxPrice)}+
      </p>
      <p>평균 1박 요금은 ₩{numToWon(average1DayPrice)}입니다.</p>
    </Box>
  );
};

export default PriceSelectArea;
