import styled from "styled-components";

export const BalanceContainer = styled.div`
  padding: 2rem;
  text-align: center;
  border-radius: 11px;
  background: #5e62ac;
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    height: 75px;
    width: 75px;
    border: 5px solid #ffd98c;
    border-radius: 50%;
    position: absolute;
    top: -20px;
    left: -10px;
  }

  &::after {
    content: "";
    height: 75px;
    width: 75px;
    background-color: #7fd7fe;
    border-radius: 50%;
    position: absolute;
    bottom: -20px;
    right: -10px;
  }
`;

export const RedDot = styled.span`
  position: absolute;
  height: 28px;
  width: 28px;
  border: 4px solid #ff968c;
  border-radius: 50%;
  top: 60%;
  left: 10%;
`;
