import styled, { keyframes } from "styled-components";

const leftMoviment = keyframes`
  0% {
    left: 100%
  }

  100% {
   left: 0
  }
`;

export const BlocM = styled.div`
  position: absolute;
  left: 100%;
  float: right;
  margin-top: ${props => props.top};
  width: ${props => (props.type === 1 ? "20px" : "520px")};
  height: 20px;
  background: ${props => props.color};
  animation: ${leftMoviment} 2.5s step-start;
  animation-timing-function: linear;
  animation-delay: ${props => props.delay};
  border-top: ${props => {
    if (props.side === "f") {
      return "10px solid transparent";
    }
    if (props.side === "u") {
      return "10px solid transparent";
    }
    return "10px solid #aba8b2";
  }};

  border-bottom: ${props => {
    if (props.side === "f") {
      return "10px solid transparent";
    }
    if (props.side === "u") {
      return "10px solid #aba8b2";
    }
    return "10px solid transparent";
  }};

  border-left: ${props => {
    if (props.side === "f") {
      return "10px solid #aba8b2";
    }
    if (props.side === "u") {
      return "10px solid transparent";
    }
    return "10px solid transparent";
  }};

  border-right: 10px solid transparent;
`;

export const Highway = styled.div`
  width: 100%;
  height: 80px;
  bottom: 170px;
  position: fixed;
  display: flex;
`;
