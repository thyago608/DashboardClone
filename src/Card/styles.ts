import styled, { css } from "styled-components";

import {
  RiGlobalLine,
  RiLineChartFill,
  RiArrowRightLine
} from "react-icons/ri";
import { MdPeople } from "react-icons/md";

export const Container = styled.div`
  background: #fff;
  border-radius: 2rem;
  margin: 2rem 0;
  padding: 4rem;

  > h1 {
    font-size: 1.6rem;
  }

  > span {
    display: block;
    font-size: 1.4rem;
    margin: 2rem 0;
    color: gray;
  }

  .container-icons {
    button {
      border: 0;
      padding: 1rem;
      border-radius: 50%;
      outline: none;
      cursor: pointer;

      & + button {
        margin: 0 1rem;
      }
    }
  }

  .container-peoples {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;

    > div {
      display: flex;
      align-items: center;
      > span {
        font-size: 1.6rem;
        display: block;
        margin-left: 1rem;
      }
    }
  }
`;

const iconCSS = css`
  width: 2rem;
  height: 2rem;
  color: gray;
`;
export const GlobalIcon = styled(RiGlobalLine)`
  ${iconCSS}
`;

export const ChartIcon = styled(RiLineChartFill)`
  ${iconCSS}
`;

export const PeopleIcon = styled(MdPeople)`
  ${iconCSS}
`;

export const ArrowIcon = styled(RiArrowRightLine)`
  ${iconCSS}
  color: #3b3b98;
`;
