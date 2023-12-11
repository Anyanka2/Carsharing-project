import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left:0;
  right:0;
  bottom:0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(97, 97, 97, 0.6);
  backdrop-filter: blur(4px);
  overflow: auto;
  overflow-y: auto;
`;