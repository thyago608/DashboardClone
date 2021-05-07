import styled, { css } from "styled-components";
import {
  RiMessage2Fill,
  RiCalendarFill,
  RiLayoutMasonryFill,
  RiFolderChartFill,
  RiArticleFill,
  RiArrowRightSLine,
  RiGlobalLine,
  RiLineChartFill,
  RiAddLine,
  RiMore2Fill,
  RiArrowRightLine
} from "react-icons/ri";
import { MdPeople } from "react-icons/md";

export const Container = styled.div`
  height: 100%;
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 250px 1fr;

  .column-right {
    padding: 4rem 5rem 4rem;

    .wrapper-column-right {
      height: 100%;

      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 3rem;

      padding: 20px 0;
    }
  }
  .column-left {
    background: #ffffff;
    padding: 1.5rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > img {
      margin: 2rem auto;
      width: 60%;
    }
  }
`;

export const More = styled.div`
  flex: 1;

  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;

  > span {
    font-weight: 600;
    text-align: center;
    margin: 1rem 0;
    font-size: 1.6rem;
  }

  > img {
    height: 49%;
  }
`;

export const Navigation = styled.nav`
  flex: 2;
  margin-top: 3rem;
  ul {
    height: 100%;

    li {
      height: 5rem;
      padding: 0 1.5rem;
      border-radius: 0.8rem;
      color: gray;

      font-size: 1.7rem;

      display: flex;
      align-items: center;
      justify-content: space-between;

      cursor: pointer;

      &::after {
        content: "";
        width: 3rem;
        height: 100%;
      }

      &:hover {
        background: #3b3b98;
        color: white;
      }
    }
  }
`;

export const Column = styled.section`
  header {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    h1 {
      font-size: 2rem;
    }

    span {
      font-size: 1.5rem;
      color: #a4b0be;
      margin: 0 1.5rem;
    }
  }
`;

const iconCSS = css`
  width: 1.8rem;
  height: 1.8rem;
`;

export const DashboardIcon = styled(RiLayoutMasonryFill)`
  ${iconCSS}
`;

export const ProjectIcon = styled(RiFolderChartFill)`
  ${iconCSS}
`;

export const PlanningIcon = styled(RiArticleFill)`
  ${iconCSS}
`;

export const MessagesIcon = styled(RiMessage2Fill)`
  ${iconCSS}
`;

export const CalendarIcon = styled(RiCalendarFill)`
  ${iconCSS}
`;

export const PeoplesIcon = styled(MdPeople)`
  ${iconCSS}
`;

export const ArrowRightIcon = styled(RiArrowRightLine)`
  color: #3b3b98;
  width: 3rem;
  height: 2rem;
`;
