import { useContext } from "react";

import { Box } from "@mui/material";

import { PriceRangeContext } from "contexts/contexts";
import numToWon from "utils/utils";

import PriceChart from "./PriceChart";
import RangeSlider from "./RangeSlider";

// TODO: 임시데이터 변경
const average1DayPrice = 165556;

const PriceSelectArea = () => {
  const {
    priceRange: { price },
  } = useContext(PriceRangeContext)!;

  return (
    <Box component="section">
      <h2>가격 범위</h2>
      <p>
        ₩{numToWon(price.min)} - ₩{numToWon(price.max)}+
      </p>
      <p>평균 1박 요금은 ₩{numToWon(average1DayPrice)}입니다.</p>
      <Box>
        <PriceChart />
        <RangeSlider />
      </Box>
    </Box>
  );
};

export default PriceSelectArea;
