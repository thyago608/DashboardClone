import { Container } from "./styles";

interface CardProps {
  data: {
    title: string;
    company: string;
    image: string;
  };
}

export function CardSimpleSecundary({ data }: CardProps) {
  return (
    <Container>
      <img src={data.image} alt={data.title} />
      <h1>{data.title}</h1>
      <span>Project Manager | {data.company}</span>
    </Container>
  );
}
