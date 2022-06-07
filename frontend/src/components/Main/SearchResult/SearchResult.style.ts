import styled from "@emotion/styled";

import theme from "styles/theme";

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  z-index: -1;
  top: ${theme.elementSize.header.others.height};

  height: calc(
    100vh - ${parseInt(theme.elementSize.header.others.height, 10)}px
  );
  .map-area {
    background-color: #999;
    flex: 55;
  }

  .accomodations-list-area {
    flex: 45;
    padding: 32px 24px;

    .title {
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 32px;
    }
  }
`;

export default Wrapper;
