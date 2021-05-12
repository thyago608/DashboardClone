import styled from "styled-components";
import { RiGlobalLine } from "react-icons/ri";
import { linearGradient } from "polished";

interface BarColorProps {
  color: "red" | "purple";
  porcentage: number;
}

const colors = {
  red: ["#ff7675", "#d63031"],
  purple: ["#9980fa", "#5758bb"]
};

export const Container = styled.section`
  margin: 1rem 0;
  border-radius: 1rem;
  background: white;
  padding: 1rem;
  transition: transform 0.4s ease;

  &:hover {
    transform: scale(1.2, 1.2);
    margin-bottom: 1.2rem;
  }
  > header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      h1 {
        font-size: 1rem;
      }

      span {
        display: block;
        font-size: 0.9rem;
        margin: 0.5rem 0;
        color: gray;
      }
    }
  }
`;

export const UserProgress = styled.div`
  margin-top: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  > img {
    width: 3rem;
    height: 3rem;
  }

  .progress {
    flex: 1;
    margin-left: 1rem;
    .percentage {
      display: flex;
      justify-content: space-between;
      color: gray;
      font-size: 0.8rem;

      strong {
        color: initial;
        margin-right: 0.2rem;
      }
    }
  }
`;

export const BarProgress = styled.div<BarColorProps>`
  margin: 1rem 0;
  background-image: ${(props) =>
    linearGradient({
      colorStops: [colors[props.color][0], colors[props.color][1]],
      toDirection: "to right"
    })};
  width: ${(props) => props.porcentage}%;
  height: 0.7rem;
  border-radius: 1rem;
`;

export const Icon = styled(RiGlobalLine)`
  width: 1rem;
  height: 1rem;
  color: gray;
`;
