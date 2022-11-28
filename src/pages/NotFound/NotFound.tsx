import NotFoundStyled from "./NotFoundStyled";

const NotFound = (): JSX.Element => {
  return (
    <NotFoundStyled>
      <div className="not-found__text">
        <h1 className="not-found__title">Página no encontrada</h1>
        <span className="not-found__code">404</span>
      </div>
    </NotFoundStyled>
  );
};

export default NotFound;
