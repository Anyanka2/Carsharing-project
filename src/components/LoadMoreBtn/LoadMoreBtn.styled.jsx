import styled from "styled-components";

export const LoadMoreBtn = styled.button`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px;
  width: 120px;
  border: solid 1px;
  color: #ffffff;
  text-decoration: none;
  font-size: 20px;
  border-radius: 8px;
  background-color: #fca311;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    border: 1px solid 7px 13px 14px rgba(116, 177, 232, 0.24);
    cursor: pointer;
  }
`;
