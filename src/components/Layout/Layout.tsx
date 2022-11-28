import { Route, Routes } from "react-router-dom";
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
          <Route path={paths.root} element={<RegisterUser />} />
          <Route path={paths.registerUser} element={<RegisterUser />} />
          <Route path={paths.notFound} element={<NotFound />} />
        </Routes>
      </main>
    </LayoutStyled>
  );
};

export default Layout;
