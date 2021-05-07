import styled from "styled-components";
import { RiSearch2Line, RiAddLine } from "react-icons/ri";

export const Container = styled.header`
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const InputSearch = styled.div`
  width: 32%;
  position: relative;

  > input {
    padding: 2rem;
    border-radius: 4rem;

    width: 100%;
    height: 4rem;
    font-size: 1.6rem;
    border: 0;
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
    width: 3.8rem;
    height: 3.8rem;

    & + img {
      margin: 0 0.1rem;
    }
  }

  > button {
    width: 4rem;
    height: 4rem;

    background: #3b3b98;
    border-radius: 50%;
    border: 0;
    cursor: pointer;

    margin-left: 1rem;
  }
`;

export const SearchIcon = styled(RiSearch2Line)`
  width: 1.5rem;
  height: 1.5rem;

  position: absolute;

  top: 30%;
  right: 1.5rem;

  color: #a4b0be;

  cursor: pointer;
`;

export const MoreIcon = styled(RiAddLine)`
  width: 2rem;
  height: 2rem;
  color: white;
`;
