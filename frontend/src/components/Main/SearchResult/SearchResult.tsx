import Filter from "./AccomodationsList/Filter/Filter";
import Wrapper from "./SearchResult.style";

const SearchResult = (): JSX.Element => {
  return (
    <Wrapper>
      <div className="accomodations-list-area">
        <Filter />
        <h2 className="title">지도에서 선택한 지역의 숙소</h2>
      </div>
      <div className="map-area" />
    </Wrapper>
  );
};

export default SearchResult;
