import { Container, Text, NavLink } from "./HomePage.styled";
//import background from "../../assets/car-bg-img.png";
import { BackgroundImg } from "../../components/services/BackgroundImg.styled";

export const HomePage = () => {
  return (
    <>
      <Container>
        <BackgroundImg>
          <Text>Looking for a vehicle? You are at the right place.</Text>
          <p>
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </p>
          <NavLink to="/catalog">Go to Catalog</NavLink>
        </BackgroundImg>
      </Container>
    </>
  );
};
