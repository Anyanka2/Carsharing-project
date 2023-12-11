import styled from "styled-components";

import bgDesk from "../../assets/car-bg-img.png";

export const BackgroundImg = styled.div`
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center -50px;
  background-image: url(${bgDesk});
`;
