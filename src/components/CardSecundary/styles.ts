import styled from "styled-components";
import { RiGlobalLine } from "react-icons/ri";

interface BarColorProps {
  color: "red" | "purple";
}

const colors = {
  red: ["#9980fa", "#5758bb"],
  purple: ["#ff7675", "#d63031"]
};

export const Container = styled.section`
  margin: 1rem 0;
  border-radius: 1rem;
  background: white;
  padding: 1rem;

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
  background-image: linear-gradient(to right, #9980fa, #5758bb);
  width: 100%;
  height: 0.7rem;
  border-radius: 1rem;
`;

export const Icon = styled(RiGlobalLine)`
  width: 1rem;
  height: 1rem;
  color: gray;
`;
