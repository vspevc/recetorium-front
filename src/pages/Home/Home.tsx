import { useEffect } from "react";
import Pagination from "../../components/Pagination/Pagination";
import RecipeList from "../../components/RecipeList/RecipeList";
import useRecipes from "../../hooks/useRecipes/useRecipes";
import { useAppSelector } from "../../redux/hooks";

const Home = (): JSX.Element => {
  const {
    pagination: { nextPage, previousPage },
  } = useAppSelector(({ ui }) => ui);
  const { loadRecipes } = useRecipes();

  useEffect(() => {
    loadRecipes();
  }, [loadRecipes]);

  return (
    <>
      <RecipeList />
      {(nextPage || previousPage) && <Pagination />}
    </>
  );
};

export default Home;
