import { useState } from "react";
import {
  Button,
  Description,
  Image,
  ImageThumb,
  Item,
  Text,
  Paragraf,
  Span,
  StyledHeart,
  StyledHeartIcon,
} from "./CarCard.styled";
import Notiflix from "notiflix";
import { Modal } from "../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { selectFavoritesCars } from "../../redux/selectors";
import { addFavoriteCar, deleteFavoriteCar } from "../../redux/favoritesSlice";
import PropTypes from "prop-types";

export const CarCard = ({ car }) => {
  const [toggleModal, setToggleModal] = useState(false);
  const dispatch = useDispatch();
  const favoriteCars = useSelector(selectFavoritesCars);
  const handleClick = () => {
    setToggleModal((prevState) => !prevState);
  };

  const handleToggleFavorites = (carId) => {
    const persistedCar = favoriteCars.find(({ id }) => carId === id);

    if (!persistedCar) {
      dispatch(addFavoriteCar(car));
      Notiflix.Notify.success("Added to your favorites");
    } else {
      dispatch(deleteFavoriteCar(carId));
      Notiflix.Notify.success("Removed from your favorites");
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
    rentalCompany,
    type,
    address,
  } = car;
  const updateAddress = address.split(", ").slice(-2).join(" | ");
  const isInFavorites = favoriteCars.some((i) => i.id === id);
  return (
    <>
      <Item>
        <ImageThumb>
          <Image src={img} alt={model} />
        </ImageThumb>
        <Paragraf>
          <Text>
            {make} <Span> {model}, </Span> {year}
          </Text>
          <Text> {rentalPrice}</Text>
        </Paragraf>
        <Description>
          {updateAddress} | {rentalCompany} | {make} | {id} | {type} |{" "}
          {accessories[0]} | {functionalities[0]}
        </Description>
        <Button id={id} onClick={handleClick}>
          Learn more
        </Button>
        <StyledHeart id={id} onClick={() => handleToggleFavorites(id)}>
          <StyledHeartIcon $isInFavorites={isInFavorites} />
        </StyledHeart>
      </Item>
      {toggleModal && <Modal handleClick={handleClick} car={car}></Modal>}
    </>
  );
};

CarCard.propTypes = {
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
  }),
};
