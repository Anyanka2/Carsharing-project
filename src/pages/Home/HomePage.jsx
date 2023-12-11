import { Container, Title, NavLink, Paragraf } from "./HomePage.styled";
//import background from "../../assets/car-bg-img.png";
import { BackgroundImg } from "../../components/services/BackgroundImg.styled";

const HomePage = () => {
  return (
    <>
      <Container>
        <Title>Looking for a vehicle? You are at the right place.</Title>
        <BackgroundImg>
          <Paragraf>
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </Paragraf>
          <NavLink to="/catalog">Check it out</NavLink>
        </BackgroundImg>
      </Container>
    </>
  );
};
export default HomePage;
