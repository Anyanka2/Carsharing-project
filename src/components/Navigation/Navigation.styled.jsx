import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavMain = styled.nav`
  background-color: #14213d;
 // border-top-right-radius: 20px;
 // border-top-left-radius: 20px;
`;

export const NavLink = styled(Link)`
  color: #000;
  text-decoration: none;
  font-size: 20px;
  color: #fff;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #fca311;
    cursor: pointer;
    //transform: scale(1.03);
  }
`;

export const Container = styled.div`
  padding: 20px;
  display: flex;
  gap: 50px;
`;
