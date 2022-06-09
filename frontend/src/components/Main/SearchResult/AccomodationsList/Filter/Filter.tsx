import { useContext } from "react";

import RouterContext from "router/Contexts";
import { numToWon } from "utils/utils";

import Item from "./Item";

// NOTE: count: 0, // 숙소 개수. <-- 결과에서 가져와야함. length로?
const getDataListFromQueryData = (data: { [key: string]: string }) => {
  const result = [];
  if (data.NumAdult || data.numChild) {
    const guestCount = `게스트 ${
      Number(data.numAdult) + Number(data.numChild)
    }명`;

    result.push(["guestCount", guestCount]);
  }

  if (data.checkIn) {
    let checkInOut = `${data.checkIn}~`;
    if (data.checkOut) {
      checkInOut += ` ${data.checkOut}`;
    }
    result.push(["checkInOut", checkInOut]);
  }

  if (!data.checkIn && data.checkOut) {
    const checkInOut = `${data.checkOut} 까지`;
    result.push(["checkInOut", checkInOut]);
  }

  if (data.minPrice) {
    let priceRange = `${numToWon(Number(data.minPrice))} ~`;
    if (data.maxPrice) {
      priceRange += ` ${numToWon(Number(data.maxPrice))}`;
    }
    result.push(["priceRange", priceRange]);
  }

  if (!data.minPrice && data.maxPrice) {
    const priceRange = `${numToWon(Number(data.maxPrice))} 까지`;
    result.push(["priceRange", priceRange]);
  }

  return result;
};

const Filter = () => {
  const { queryData } = { ...useContext(RouterContext) };

  return (
    queryData && (
      <Item
        // count={count} // NOTE: api응답으로 온 데이터
        queryDataList={getDataListFromQueryData(queryData)}
      />
    )
  );
};

export default Filter;
