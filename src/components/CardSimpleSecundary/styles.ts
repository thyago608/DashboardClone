import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  border-radius: 1rem;
  margin: 1rem 0;
  padding: 2.5rem 1.3rem;
  transition: transform 0.4s ease;

  &:hover {
    transform: scale(1.2, 1.2);
    margin-bottom: 1.2rem;
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
`;
