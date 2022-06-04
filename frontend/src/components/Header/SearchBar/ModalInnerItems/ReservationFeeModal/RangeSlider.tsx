import { useContext, useState, useRef, useEffect } from "react";

import { PriceRangeContext } from "contexts/contexts";

const INITIAL_PRICE_PERCENTAGE = {
  min: 0,
  max: 100,
};

const RangeSlider = () => {
  const {
    priceRange: { percentage },
    setPriceRange: { setPrice, setPercentage },
  } = useContext(PriceRangeContext)!;

  // const [pricePercentage, setPricePercentage] = ;

  const $leftInputRange = useRef<HTMLInputElement>(null);
  const $rightInputRange = useRef<HTMLInputElement>(null);

  const $leftThumb = useRef<HTMLDivElement>(null);
  const $rightThumb = useRef<HTMLDivElement>(null);

  const handleLeftRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentLeftPercent = Math.min(
      Math.floor(Number(e.target.value)),
      Math.floor(Number($rightInputRange.current?.value)) - 5
    );

    if ($leftThumb.current) {
      $leftThumb.current.style.left = `${currentLeftPercent}%`;
    }

    setPrice();

    setPercentage({
      ...percentage,
      min: currentLeftPercent,
    });
  };

  // useEffect(() => {}, [pricePercentage]);

  return (
    <div>
      <input
        type="range"
        id="input-left"
        min={INITIAL_PRICE_PERCENTAGE.min}
        max={INITIAL_PRICE_PERCENTAGE.max}
        value={pricePercentage.rangeStartPercent}
        onChange={handleLeftRangeChange}
        ref={$leftInputRange}
      />
      <input
        type="range"
        id="input-right"
        min={INITIAL_PRICE_PERCENTAGE.min}
        max={INITIAL_PRICE_PERCENTAGE.max}
        value={pricePercentage.rangeEndPercent}
        ref={$rightInputRange}
      />

      <div className="slider">
        <div className="thumb left" ref={$leftThumb} />
        <div className="thumb right" ref={$rightThumb} />
      </div>
    </div>
  );
};

export default RangeSlider;
