import React from "react";
import styled, { keyframes } from "styled-components";
import { SpinnerProps } from "./types";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
    transform-origin: center;
  }
  to {
    transform: rotate(360deg);
     transform-origin: center;
  }
`;
// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

const Container = styled.div`
  position: relative;
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 128 }) => {
  return (
    <Container>
      <Rotate>
        <svg
          xmlSpace="preserve"
          viewBox="0 0 100 100"
          y={0}
          x={0}
          xmlns="http://www.w3.org/2000/svg"
          id="圖層_1"
          version="1.1"
          width="104px"
          height="104px"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g className="ldl-scale">
            <path
              fill="#849b87"
              d="M26.7 63.7l5.7-9.9 9.9 5.7L32.8 37 8.6 40l9.9 5.7-5.8 10c-.5.9-.5 2.1 0 3l11.2 19.4c.5.9 1.5 1.5 2.6 1.5h21v-16H26.7z"
              style={{
                fill: "rgb(132, 155, 135)",
              }}
            />
            <path
              fill="#f8b26a"
              d="M87.7 55.4L77.2 37.2l-13.9 8 10.4 18.1H62.3V51.8L47.7 71.3l14.7 19.5V79.3H74c1.1 0 2.1-.6 2.6-1.5l11.2-19.4c.5-.9.5-2.1-.1-3z"
              style={{
                fill: "rgb(248, 178, 106)",
              }}
            />
            <path
              fill="#abbd81"
              d="M69.5 24.6l-5.8-10c-.5-.9-1.5-1.5-2.6-1.5H38.7c-1.1 0-2.1.6-2.6 1.5L25.6 32.7l13.9 8 10.4-18.1 5.7 9.9-9.9 5.7 24.2 3 9.5-22.4-9.9 5.8z"
              style={{
                fill: "rgb(171, 189, 129)",
              }}
            />
          </g>
        </svg>
      </Rotate>
    </Container>
  );
};

export default Spinner;
