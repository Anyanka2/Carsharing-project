import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import { Container } from "./App.styled";
import HomePage from "./pages/Home/HomePage";
import CatalogPage from "./pages/Catalog/CatalogPage";
import FavoritesPage from "./pages/Favorites/FavoritesPage";

export const App = () => {
  return (
    <>
    <Container>
      <Suspense>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/catalog" element={<CatalogPage />}></Route>
          <Route path="/favorites" element={<FavoritesPage />}></Route>
        </Routes>
      </Suspense>
      </Container>
      </>
  );
};

export default App;
