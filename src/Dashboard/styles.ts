import styled, { css } from "styled-components";
import {
  RiMessage2Fill,
  RiCalendarFill,
  RiLayoutMasonryFill,
  RiFolderChartFill,
  RiArticleFill,
  RiAddLine,
  RiArrowRightLine,
  RiMore2Fill
} from "react-icons/ri";

import { MdPeople } from "react-icons/md";

export const Container = styled.div`
  height: 100%;
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1420px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 15.6rem 1fr;
`;

export const ColumnLeft = styled.div`
  background: #ffffff;
  padding: 1.5rem;

  display: flex;
  flex-direction: column;

  > img {
    margin: 2rem auto;
    width: 50%;
  }
`;

export const Navigation = styled.nav`
  width: 90%;
  margin: 3rem auto;

  ul {
    li {
      position: relative;
      height: 3rem;
      border-radius: 0.7rem;
      color: gray;

      font-size: 1rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      cursor: pointer;

      &:hover {
        background: #3b3b98;
        color: white;
      }
    }
  }
`;

export const More = styled.div`
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;

  > span {
    display: block;
    font-weight: 600;
    text-align: center;
    font-size: 1rem;

    &:first-of-type {
      margin: 0.3rem 0;
    }
  }

  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;

    margin: 0.5rem 0;
  }
`;

export const ColumnRight = styled.div`
  padding: 3rem;

  .wrapper-columns {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 20px 0;
  }
`;

export const Column = styled.section`
  > header {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    h1 {
      font-family: Poppins;
      font-size: 1rem;
      font-weight: 500;

      span {
        font-family: Archivo;
        font-size: 0.85rem;
        color: #a4b0be;
        margin: 0 0.8rem;
      }
    }
  }
  .add-project {
    background: white;
    border: 0;
    border-radius: 0.8rem;
    width: 100%;
    height: 4rem;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #3b3b98;
    cursor: pointer;

    font-size: 0.8rem;
    font-weight: 600;
    font-family: Poppins;

    transition: filter 0.2s ease;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

const iconCSS = css`
  width: 1.2rem;
  height: 1.2rem;
  margin: 0 1rem;
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

export const AddIcon = styled(RiAddLine)`
  ${iconCSS}
`;

export const ArrowRightIcon = styled(RiArrowRightLine)`
  width: 2.2rem;
  height: 2.2rem;
  color: #3b3b98;
`;

export const MoreIcon = styled(RiMore2Fill)`
  width: 1.2rem;
  height: 100%;
  margin: 0 1rem;

  position: absolute;
  top: 0;
  right: 0;
  color: white;
`;
