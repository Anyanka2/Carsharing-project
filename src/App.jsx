import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import { Container } from "./App.styled";

const HomePage = lazy(() => import('./pages/Home/HomePage'));
const CatalogPage = lazy(() => import('./pages/Catalog/CatalogPage'));
const FavoritesPage = lazy(() => import('./pages/Favorites/FavoritesPage'));

export const App = () => {
  return (
    <>
      <Container>
      <Suspense>
        <Navigation />
        <Routes>    
            <Route index element={<HomePage />}/>
            <Route path="/catalog" element={<CatalogPage />}/>
            <Route path="/favorites" element={<FavoritesPage />}/>
            <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </Suspense>
    </Container>
      </>
  );
};

export default App;


