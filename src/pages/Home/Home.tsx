import { useEffect } from "react";
import RecipeList from "../../components/RecipeList/RecipeList";
import useRecipes from "../../hooks/useRecipes/useRecipes";

const Home = (): JSX.Element => {
  const { loadRecipes } = useRecipes();
  useEffect(() => {
    loadRecipes();
  }, [loadRecipes]);

  return <RecipeList />;
};

export default Home;
