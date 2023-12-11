import { Link } from "react-router-dom";
import styled from "styled-components";


export const Container = styled.div`
  width: 1400px;
  padding: 10px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 60px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  
`;
export const Text = styled.h2`
  margin: 0;
  color: #14213d;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 26px;
  font-weight: 900;
  letter-spacing: 0;
  line-height: 0.77;
  text-transform: none;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  width: 140px;
  border: solid 1px;
  color: #ffffff;
  text-decoration: none;
  font-size: 20px;
  border-radius: 8px;
  background-color: #fca311;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    border: 1px solid #14213d;
    cursor: pointer;
  }
`;
