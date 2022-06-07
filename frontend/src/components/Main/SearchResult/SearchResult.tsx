import Filter from "./AccomodationsList/Filter/Filter";
import Wrapper from "./SearchResult.style";

const SearchResult = (): JSX.Element => {
  return (
    <Wrapper>
      <div className="accomodations-list-area">
        <Filter />
      </div>
      <div className="map-area" />
    </Wrapper>
  );
};

export default SearchResult;
