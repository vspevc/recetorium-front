import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import useRecipes from "../../hooks/useRecipes/useRecipes";
import NotFound from "../../pages/NotFound/NotFound";
import RegisterUser from "../../pages/RegisterUser/RegisterUser";
import paths from "../../utils/paths/paths";
import Header from "../Header/Header";
import RecipeList from "../RecipeList/RecipeList";
import LayoutStyled from "./LayoutStyled";

const Layout = (): JSX.Element => {
  const { loadRecipes } = useRecipes();
  useEffect(() => {
    loadRecipes();
  }, [loadRecipes]);

  return (
    <LayoutStyled>
      <Header />
      <main>
        <Routes>
          <Route path={paths.root} element={<RecipeList />} />
          <Route path={paths.registerUser} element={<RegisterUser />} />
          <Route path={paths.notFound} element={<NotFound />} />
        </Routes>
      </main>
    </LayoutStyled>
  );
};

export default Layout;
