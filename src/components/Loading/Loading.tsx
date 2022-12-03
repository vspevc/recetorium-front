import LoadingStyled from "./LoadingStyled";

const Loading = (): JSX.Element => {
  return (
    <LoadingStyled>
      <div className="jelly-triangle" aria-label="Cargando, por favor espere.">
        <div className="jelly-triangle__dot"></div>
        <div className="jelly-triangle__traveler"></div>
      </div>

      <svg width="0" height="0" className="jelly-maker">
        <defs>
          <filter id="uib-jelly-triangle-ooze">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="7.3"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="ooze"
            />
            <feBlend in="SourceGraphic" in2="ooze" />
          </filter>
        </defs>
      </svg>
    </LoadingStyled>
  );
};

export default Loading;
