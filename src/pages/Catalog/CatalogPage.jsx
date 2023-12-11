import { CarsList } from "../../components/CarsList/CarsList";
import { getAdverts } from "../../components/services/advertsApi";

const CatalogPage = () => {
  const cars = getAdverts();
  return (
    <>
     
      <CarsList cars={cars} />
    
    </>
  );
};

export default CatalogPage;