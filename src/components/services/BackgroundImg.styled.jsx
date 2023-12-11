import styled from "styled-components";

import bgDesk from "../../assets/car-bg-img.png";

export const BackgroundImg = styled.div`
  //min-height: 100vh;
  height: 700px;
  max-width: 100vw;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${bgDesk});
  //background-position: center;
`;
