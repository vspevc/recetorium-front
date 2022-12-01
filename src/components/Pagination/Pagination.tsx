import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useRecipes from "../../hooks/useRecipes/useRecipes";
import { useAppSelector } from "../../redux/hooks";
import Button from "../Button/Button";
import PaginationStyled from "./PaginationStyled";

const Pagination = (): JSX.Element => {
  const {
    pagination: { currentPage, totalPages, previousPage, nextPage },
  } = useAppSelector(({ ui }) => ui);
  const { loadRecipes } = useRecipes();

  const loadPage = (path: string) => {
    if (!path) {
      return;
    }

    loadRecipes(path);
  };

  return (
    <PaginationStyled>
      <Button
        action={() => {
          loadPage(previousPage!);
        }}
        options={{ variant: "small", disabled: previousPage ? false : true }}
      >
        <FontAwesomeIcon icon={solid("circle-chevron-left")} />
      </Button>

      <span>{`página ${currentPage} de ${totalPages}`}</span>

      <Button
        action={() => {
          loadPage(nextPage!);
        }}
        options={{ variant: "small", disabled: nextPage! ? false : true }}
      >
        <FontAwesomeIcon icon={solid("circle-chevron-right")} />
      </Button>
    </PaginationStyled>
  );
};

export default Pagination;
