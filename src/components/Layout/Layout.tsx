import { Route, Routes } from "react-router-dom";
import NotFound from "../../pages/NotFound/NotFound";
import RegisterUser from "../../pages/RegisterUser/RegisterUser";
import paths from "../../utils/paths/paths";
import Header from "../Header/Header";
import RecipeCard from "../RecipeCard/RecipeCard";
import { RecipeStructure } from "../RecipeCard/types";
import LayoutStyled from "./LayoutStyled";

const Layout = (): JSX.Element => {
  const recipe: RecipeStructure = {
    id: "",
    name: "Ensalada con cacahuetes y guindilla",
    urlSlug: "/",
    author: "",
    types: [{ name: "comida" }, { name: "cena" }],
    ingredients: [],
    steps: [],
    elaborationTime: "30 min",
    image: "https://static.stacker.com/s3fs-public/03bsalad0879GZOF_6.jpg",
  };
  return (
    <LayoutStyled>
      <Header />
      <main>
        <Routes>
          <Route path={paths.root} element={<RecipeCard recipe={recipe} />} />
          <Route path={paths.registerUser} element={<RegisterUser />} />
          <Route path={paths.notFound} element={<NotFound />} />
        </Routes>
      </main>
    </LayoutStyled>
  );
};

export default Layout;
