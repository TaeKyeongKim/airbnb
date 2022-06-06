import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  /* 헤더사이즈만큼 빼기 */
  height: calc(100vh - 94px);

  .map-area {
    background-color: #999;
    flex: 55;
  }

  .accomodations-list-area {
    background-color: #828282;
    flex: 45;
  }
`;

export default Wrapper;
