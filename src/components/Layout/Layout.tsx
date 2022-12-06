import { Route, Routes } from "react-router-dom";
import CreateRecipe from "../../pages/CreateRecipe/CreateRecipe";
import Home from "../../pages/Home/Home";
import NotFound from "../../pages/NotFound/NotFound";
import RegisterUser from "../../pages/RegisterUser/RegisterUser";
import paths from "../../utils/paths/paths";
import Header from "../Header/Header";
import LayoutStyled from "./LayoutStyled";

const Layout = (): JSX.Element => {
  return (
    <LayoutStyled>
      <Header />
      <main>
        <Routes>
          <Route path={paths.root} element={<Home />} />
          <Route path={paths.registerUser} element={<RegisterUser />} />
          <Route path={paths.createRecipe} element={<CreateRecipe />} />
          <Route path={paths.notFound} element={<NotFound />} />
        </Routes>
      </main>
    </LayoutStyled>
  );
};

export default Layout;
