import { useContext, useEffect, useRef, useState } from "react";

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

const FIRST_INDEX = 0;

const PriceSelectArea = () => {
  const $canvasRef = useRef<HTMLCanvasElement>(null);
  const [priceRange /* setPriceRange */] = useState({
    left: 0,
    right: 100,
  });

  const { accomodationPrice /* setAccomodationPrice */ } =
    useContext(PriceSelectContext);
  const { minPrice, maxPrice } = accomodationPrice;

  const drawChart = (/* ctx: CanvasRenderingContext2D */) => {
    const ctx = $canvasRef.current?.getContext("2d")!;
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    let currentX = -coordXIncrementRange;
    let prevCoords = { ...start };

    accomodationsCountList.forEach((el, idx) => {
      currentX += coordXIncrementRange;

      const coords = {
        x: currentX,
        y: 100 - Math.floor((el / maxCount) * canvasSize.height),
      };

      if (idx === FIRST_INDEX) {
        ctx.lineTo(coords.x, coords.y);
        prevCoords = { ...coords };

        return;
      }

      ctx.bezierCurveTo(
        prevCoords.x + coordXIncrementRange / 2,
        prevCoords.y,
        prevCoords.x + coordXIncrementRange / 2,
        coords.y,
        coords.x,
        coords.y
      );

      prevCoords = { ...coords };
    });

    ctx.bezierCurveTo(
      prevCoords.x + coordXIncrementRange / 2,
      prevCoords.y,
      prevCoords.x + coordXIncrementRange / 2,
      end.y,
      end.x,
      end.y
    );

    ctx.closePath();
  };

  // TODO: 고치기..
  const fillColor = "#E5E5E5";

  const fillChart = (
    // ctx: CanvasRenderingContext2D,
    thumbLeftPercent: number,
    thumbRightPercent: number
  ) => {
    const ctx = $canvasRef.current?.getContext("2d")!;
    const linearGardaradientStyle = ctx.createLinearGradient(
      start.x,
      start.y,
      end.x,
      end.y
    );

    linearGardaradientStyle.addColorStop(0, fillColor);
    linearGardaradientStyle.addColorStop(thumbLeftPercent * 0.01, fillColor);
    linearGardaradientStyle.addColorStop(thumbLeftPercent * 0.01, "#000");

    linearGardaradientStyle.addColorStop(thumbRightPercent * 0.01, "#000");
    linearGardaradientStyle.addColorStop(thumbRightPercent * 0.01, fillColor);
    linearGardaradientStyle.addColorStop(1, fillColor);
    ctx.fillStyle = linearGardaradientStyle;
    ctx.fill();
  };

  const { left, right } = priceRange;

  useEffect(() => {
    // if (ctx) {
    drawChart();
    fillChart(left, right);
    // }
  }, []);

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
