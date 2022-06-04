import { Box } from "@mui/material";

import numToWon from "utils/utils";

import PriceChart from "./PriceChart";

// TODO: 임시데이터 변경
const average1DayPrice = 165556;

const PriceSelectArea = ({ initialPrice }: PriceSelectAreaProp) => {
  const { minPrice, maxPrice } = initialPrice;

  return (
    <Box component="section">
      <h2>가격 범위</h2>
      <p>
        ₩{numToWon(minPrice)} - ₩{numToWon(maxPrice)}+
      </p>
      <p>평균 1박 요금은 ₩{numToWon(average1DayPrice)}입니다.</p>
      <Box>
        <PriceChart />
      </Box>
    </Box>
  );
};

export default PriceSelectArea;

interface PriceSelectAreaProp {
  initialPrice: {
    minPrice: number;
    maxPrice: number;
  };
}
