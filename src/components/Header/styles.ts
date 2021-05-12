import styled from "styled-components";
import { RiSearch2Line, RiAddLine } from "react-icons/ri";

interface Props {
  isActive: boolean;
}

export const Container = styled.header`
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const InputSearch = styled.div<Props>`
  position: relative;

  > input {
    border: 0;
    border-radius: 4rem;

    width: 25rem;
    height: 3rem;
    font-size: 1rem;
    padding: 1rem;
    outline: none;

    &::placeholder {
      color: #b2bec3;
    }
  }
`;

export const ContainerAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    width: 3rem;
    height: 3rem;
    transition: transform 0.2s ease;
    cursor: pointer;

    & + img {
      margin: 0 0.1rem;
    }

    &:hover {
      transform: scale(2, 2);
      margin: 0 0.8rem;
    }
  }

  > button {
    width: 2.8rem;
    height: 2.8rem;

    background: #3b3b98;
    border-radius: 50%;
    border: 0;

    cursor: pointer;
    margin-left: 0.5rem;

    transition: filter 0.2s ease;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const SearchIcon = styled(RiSearch2Line)`
  width: 1rem;
  height: 100%;

  position: absolute;

  top: 0;
  right: 1rem;

  color: #a4b0be;
  cursor: pointer;
`;

export const MoreIcon = styled(RiAddLine)`
  width: 2rem;
  height: 2rem;
  color: white;
`;
