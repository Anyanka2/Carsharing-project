import { Backdrop } from "../Backdrop.styled";
import { useEffect } from "react";
import SmallCross from "../../assets/cross-small.svg";

import {
  Accessories,
  Age,
  CloseBtn,
  Country,
  Description,
  TitleCar,
  Driver,
  Functional,
  Image,
  ImageThumb,
  Item,
  MileagePrice,
  Mileage,
  ModalStyled,
  Paragraf,
  Price,
  PriceCar,
  Rental,
  Span,
  Tel,
  Title,
  User,
} from "./Modal.styled";
import { numberWithComma } from "../helpers/NumberWithComma";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");

export const Modal = ({ handleClick, car }) => {
  useEffect(() => {
    const handlePressKey = (event) => {
      if (event.code === "Escape") {
        handleClick();
      }
    };
    document.body.classList.add("no-scroll");
    window.addEventListener("keydown", handlePressKey);

    return () => {
      window.removeEventListener("keydown", handlePressKey);
      document.body.classList.remove("no-scroll");
    };
  }, [handleClick]);

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      handleClick();
    }
  };
  const {
    id,
    img,
    make,
    model,
    year,
    rentalPrice,
    functionalities,
    accessories,
    fuelConsumption,
    engineSize,
    description,
    rentalConditions,
    mileage,
    type,
    address,
  } = car;

  const updateAddress = address.split(", ").slice(-2).join(" | ");
  const rentalConditionsToArray = rentalConditions.split("\n");
  const userConditions = rentalConditionsToArray[0];
  const userConditionsDescr = userConditions.split(": ");
  const driverLicense = rentalConditionsToArray[1];
  const security = rentalConditionsToArray[2];

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalStyled>
        <CloseBtn className="button" type="button" onClick={handleClick}>
          <SmallCross size={24} />
        </CloseBtn>
        <Item>
          <ImageThumb>
            <Image src={img} alt={model} />
          </ImageThumb>
          <Paragraf>
            <TitleCar>
              {make}
              <Span> {model}, </Span>
              {year}
            </TitleCar>
          </Paragraf>
          <Description>
            <Country>
              {updateAddress} | id: {id} | Year: {year} | Type: {type}
            </Country>
            <Country>
              fuelConsumption: {fuelConsumption} | engineSize: {engineSize}
            </Country>
            <Title>{description}</Title>
            <Functional>Accessories and functionalities:</Functional>
            <Accessories>
              {accessories[0]} | {accessories[1]} | {accessories[2]}
            </Accessories>
            <Accessories>
              {functionalities[0]} | {functionalities[1]} | {functionalities[2]}
            </Accessories>
            <Rental>Rental Conditions:</Rental>
            <User>
              <Age>
                {userConditionsDescr[0]}:
                <Mileage> {userConditionsDescr[1]} </Mileage>
              </Age>
              <Driver>{driverLicense}</Driver>
            </User>
            <MileagePrice>
              <Price>{security}</Price>
              <Price>
                Mileage: <Mileage>{numberWithComma(mileage)} </Mileage>
              </Price>
              <Price>
                Price: <PriceCar>{rentalPrice.slice(1) + "$"}</PriceCar>
              </Price>
            </MileagePrice>
          </Description>
          <Tel href="tel:+380730000000">Rental car</Tel>
        </Item>
      </ModalStyled>
    </Backdrop>,
    modalRoot
  );
};

Modal.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number,
    year: PropTypes.number,
    make: PropTypes.string,
    model: PropTypes.string,
    type: PropTypes.string,
    img: PropTypes.string,
    description: PropTypes.string,
    accessories: PropTypes.arrayOf(PropTypes.string),
    functionalities: PropTypes.arrayOf(PropTypes.string),
    rentalPrice: PropTypes.string,
    rentalCompany: PropTypes.string,
    address: PropTypes.string,
    fuelConsumption: PropTypes.string,
    engineSize: PropTypes.string,
    rentalConditions: PropTypes.string,
    mileage: PropTypes.number,
  }),
};
