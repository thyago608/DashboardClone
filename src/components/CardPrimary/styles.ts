import styled, { css } from "styled-components";

import {
  RiGlobalLine,
  RiLineChartFill,
  RiArrowRightLine
} from "react-icons/ri";
import { MdPeople } from "react-icons/md";
import { VscCheck } from "react-icons/vsc";
interface Props {
  peoples: boolean;
}
export const Container = styled.div<Props>`
  background: #fff;
  border-radius: 1rem;
  margin: 1rem 0;
  padding: 1.3rem;

  transition: transform 0.4s ease;

  &:hover {
    transform: scale(1.2, 1.2);
  }

  .wrapper {
    display: flex;
    flex-direction: ${(props) => (props.peoples ? "column" : "row")};
    align-items: ${(props) => (props.peoples ? "space-between" : "center")};
    justify-content: ${(props) =>
      props.peoples ? "flex-start" : "space-between"};
  }

  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  > h1 {
    font-size: 1rem;
    margin-top: 1rem;
  }

  > span {
    display: block;
    font-size: 0.8rem;
    margin: 0.8rem 0;
    color: gray;
  }

  .container-icons {
    button {
      border: 0;
      border-radius: 50%;
      padding: 0.5rem;
      margin-right: 0.5rem;
      outline: none;

      cursor: pointer;
    }
  }
  .container-peoples {
    display: flex;
    align-items: center;
    margin: 1rem 0;
    font-size: 1rem;
    color: gray;

    > button {
      border: 0;
      padding: 0.5rem;
      border-radius: 50%;
      background: #3b3b98;
      cursor: pointer;
    }
  }
`;

const iconCSS = css`
  width: 1rem;
  height: 0.8rem;
  color: gray;
`;
export const GlobalIcon = styled(RiGlobalLine)`
  ${iconCSS}
`;

export const ChartIcon = styled(RiLineChartFill)`
  ${iconCSS}
`;

export const PeopleIcon = styled(MdPeople)`
  ${iconCSS};
  height: 1rem;
  margin-right: 0.5rem;
`;

export const ArrowIcon = styled(RiArrowRightLine)`
  color: #3b3b98;
  margin-left: auto;
  width: 1rem;
  height: 1rem;
`;

export const CheckIcon = styled(VscCheck)`
  color: white;
  width: 1rem;
  height: 1rem;
`;
