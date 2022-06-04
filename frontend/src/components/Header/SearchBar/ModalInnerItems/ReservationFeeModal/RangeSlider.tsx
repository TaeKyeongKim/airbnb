import { useContext, useRef } from "react";

import { PriceRangeContext } from "contexts/contexts";

const INITIAL_PRICE_PERCENTAGE = {
  min: 0,
  max: 100,
};

const RangeSlider = () => {
  // const {
  //   priceRange: { percentage },
  //   setPriceRange: { setPrice, setPercentage },
  // } = useContext(PriceRangeContext)!;

  const {
    priceRange: { price, percentage },
    setPriceRange: { setPrice, setPercentage },
  } = useContext(PriceRangeContext)!;

  const computePriceByPercentage = (percent: number): number => {
    return price.min + (price.max - price.min) * (percent * 0.01);
  };

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

    setPrice({ ...price, min: computePriceByPercentage(currentLeftPercent) });

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
        value={percentage.min}
        onChange={handleLeftRangeChange}
        ref={$leftInputRange}
      />
      <input
        type="range"
        id="input-right"
        min={INITIAL_PRICE_PERCENTAGE.min}
        max={INITIAL_PRICE_PERCENTAGE.max}
        value={percentage.max}
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
