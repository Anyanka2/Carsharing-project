import styled from "styled-components";

export const ModalStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  background-color: white;
  border-radius: 10px;
  padding: 40px;
`;

export const Item = styled.div`
  border-radius: 6px;
  max-width: 474px;
  min-height: 426px;
  overflow: hidden;
  gap: 10px;
  background-color: white;
`;

export const ImageThumb = styled.div`
  height: 268px;
  border-radius: 14px;
  overflow: hidden;
`;

export const Image = styled.img`
  height: 268px;
  object-fit: cover;
  width: 100%;
  object-position: 50% 50%;
`;

export const Title = styled.h3`
  margin: 0;
  margin-top: 20px;
  color: #14213d;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.33;
`;
export const Span = styled.span`
  color: #3470ff;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.33;
`;

export const Paragraf = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  margin: 0;
  margin-bottom: 10px;
`;

export const TitleCar = styled.h5`
  color: #14213d;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42;
`;

export const Description = styled.div`
  margin: 0;
  padding: 0 10px;
  margin-bottom: 20px;
`;

export const Country = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
`;

export const Functional = styled.h4`
  color: #14213d;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.42;
  margin-bottom: 10px;
`;

export const Accessories = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
`;

export const Rental = styled.h4`
  color: #14213d;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.42;
`;

export const CloseBtn = styled.button`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 14px;
  right: 14px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:hover {
  }
`;
export const Tel = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  padding: 6px;
  min-height: 20px;
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
    border: 1px solid #000000;
    cursor: pointer;
  }
`;

export const User = styled.div`
  display: flex;
  gap: 8px;
  margin: 0;
  margin-bottom: 15px;
`;
export const Age = styled.p`
  border: none;
  margin: 0;
  padding: 7px 14px;
  border-radius: 35px;
  background-color: rgba(249, 249, 249, 1);
  color: #14213d;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
`;

export const Driver = styled.p`
  margin: 0;
  padding: 5px 14px;
  border-radius: 35px;
  background-color: rgba(249, 249, 249, 1);
  color: #14213d;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
`;
export const MileagePrice = styled.div`
  display: flex;
  gap: 8px;
  margin: 0;
  color: #14213d;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
`;

export const Price = styled.p`
  margin: 0;
  padding: 5px 14px;
  border-radius: 35px;
  background-color: rgba(249, 249, 249, 1);
  color: #14213d;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
`;

export const Mileage = styled.span`
  color: #3470ff;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: -0.24px;
`;

export const PriceCar = styled.span`
  color: #3470ff;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: -0.24px;
`;
