import { useEffect, useRef } from "react";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Checkbox, FormControlLabel, IconButton } from "@mui/material";

import Wrapper from "./MapArea.style";

const { kakao } = window;

const mapOption = {
  center: new kakao.maps.LatLng(33.450701, 126.570667),
  level: 3,
};

const MapArea = () => {
  const $mapArea = useRef<HTMLDivElement | null>(null);
  const map = useRef(null);

  useEffect(() => {
    const mapContainer = $mapArea.current;

    // TODO: new Lint오류로 임시로 ref이용, 추후 개선
    map.current = new kakao.maps.Map(mapContainer, mapOption);
  }, []);

  return (
    <Wrapper>
      <div className="map-area" ref={$mapArea} />
      <div className="map-checkbox-wrap float-item">
        <FormControlLabel
          control={
            <Checkbox defaultChecked color="grey2" aria-label="Checkbox" />
          }
          label="지도를 움직이며 검색하기"
        />
      </div>
      <div className="zoom-button float-item">
        <IconButton aria-label="지도 확대하기" component="span">
          <AddIcon />
        </IconButton>
        <IconButton aria-label="지도 축소하기" component="span">
          <RemoveIcon />
        </IconButton>
      </div>
    </Wrapper>
  );
};

export default MapArea;

declare global {
  interface Window {
    kakao: any;
  }
}
