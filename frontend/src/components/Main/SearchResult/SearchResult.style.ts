import styled from "@emotion/styled";

import theme from "styles/theme";

const Wrapper = styled.div`
  display: flex;
  height: calc(
    100vh - ${parseInt(theme.elementSize.header.others.height, 10)}px
  );

  .map-area {
    background-color: #999;
    flex: 55;
  }

  .accomodations-list-area {
    /* background-color: #828282; */
    flex: 45;
    padding: 32px 24px;
  }
`;

export default Wrapper;
