import { useContext, useRef } from "react";

import { Box } from "@mui/material";

import numToWon from "utils/utils";

import { PriceSelectContext } from "../Context/SearchBarContexts";

const EXCLUDE_RANGE_COUNT = 1;
// TODO: 실제 API 데이터로 수정, 테마 분리
const canvasSize = {
  width: 365,
  height: 100,
};

// 임시데이터 시작
const average1DayPrice = 165556;
const accomodationsCountList = [
  0, 10, 3, 4, 40, 20, 0, 30, 0, 10, 20, 11, 9, 1, 10, 3, 5, 10, 4, 30,
];
// 임시 데이터 끝
const priceRangeCount = accomodationsCountList.length;
const maxCount = Math.max(...accomodationsCountList);

const coordXIncrementRange = Math.floor(
  canvasSize.width / (priceRangeCount - EXCLUDE_RANGE_COUNT)
  // 첫번째 범위는 그래프에서 이미 그리고 시작하므로 하나 제외
);

const start = { x: 0, y: canvasSize.height };
const end = {
  x: canvasSize.width,
  y: canvasSize.height,
};

const PriceSelectArea = () => {
  const $canvasRef = useRef<HTMLCanvasElement>(null);
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
      <Box
        component="canvas"
        ref={$canvasRef}
        sx={{ width: canvasSize.width, height: canvasSize.height }}
      >
        선택한 날짜 기준 숙소들의 가격 범위를 나타내는 차트입니다.
      </Box>
    </Box>
  );
};

export default PriceSelectArea;
