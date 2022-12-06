import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import paths from "../../utils/paths/paths";
import Header from "../Header/Header";
import Loading from "../Loading/Loading";
import LayoutStyled from "./LayoutStyled";

const Home = React.lazy(() => import("../../pages/Home/Home"));
const RegisterUser = React.lazy(
  () => import("../../pages/RegisterUser/RegisterUser")
);
const CreateRecipe = React.lazy(
  () => import("../../pages/CreateRecipe/CreateRecipe")
);
const NotFound = React.lazy(() => import("../../pages/NotFound/NotFound"));

const Layout = (): JSX.Element => {
  return (
    <LayoutStyled>
      <Header />
      <main>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path={paths.root} element={<Home />} />
            <Route path={paths.registerUser} element={<RegisterUser />} />
            <Route path={paths.createRecipe} element={<CreateRecipe />} />
            <Route path={paths.notFound} element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
    </LayoutStyled>
  );
};

export default Layout;
