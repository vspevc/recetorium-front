import styled from "styled-components";

const LoadingStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00000088;

  .jelly-triangle {
    --uib-size: 44px;
    --uib-speed: 1.75s;
    --uib-color: #fff;

    position: relative;
    height: var(--uib-size);
    width: var(--uib-size);
    filter: url("#uib-jelly-triangle-ooze");
  }

  .jelly-triangle__dot,
  .jelly-triangle::before,
  .jelly-triangle::after {
    content: "";
    position: absolute;
    width: 33%;
    height: 33%;
    background: var(--uib-color);
    border-radius: 100%;
  }

  .jelly-triangle__dot {
    top: 6%;
    left: 30%;
    animation: grow var(--uib-speed) ease infinite;
  }

  .jelly-triangle::before {
    bottom: 6%;
    right: 0;
    animation: grow var(--uib-speed) ease calc(var(--uib-speed) * -0.666)
      infinite;
  }

  .jelly-triangle::after {
    bottom: 6%;
    left: 0;
    animation: grow var(--uib-speed) ease calc(var(--uib-speed) * -0.333)
      infinite;
  }

  .jelly-triangle__traveler {
    position: absolute;
    top: 6%;
    left: 30%;
    width: 33%;
    height: 33%;
    background: var(--uib-color);
    border-radius: 100%;
    animation: triangulate var(--uib-speed) ease infinite;
  }

  .jelly-maker {
    width: 0;
    height: 0;
    position: absolute;
  }

  @keyframes triangulate {
    0%,
    100% {
      transform: none;
    }

    33.333% {
      transform: translate(120%, 175%);
    }

    66.666% {
      transform: translate(-95%, 175%);
    }
  }

  @keyframes grow {
    0%,
    100% {
      transform: scale(1.5);
    }

    20%,
    70% {
      transform: none;
    }
  }
`;

export default LoadingStyled;
