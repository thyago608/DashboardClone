import {
  Container,
  GlobalIcon,
  ChartIcon,
  PeopleIcon,
  ArrowIcon
} from "./styles";

interface CardProps {
  data: {
    title: string;
    company: string;
    image?: string;
    amount: number;
  };
}

export function Card({ data }: CardProps) {
  return (
    <Container>
      <img src={data.image} alt={data.title} />
      <h1>{data.title}</h1>
      <span>Project Manager | {data.company}</span>

      <div className="container-icons">
        <button>
          <GlobalIcon />
        </button>
        <button>
          <ChartIcon />
        </button>
        <button>
          <GlobalIcon />
        </button>
      </div>
      <div className="container-peoples">
        <PeopleIcon />
        <span>{data.amount} Peoples</span>
        <ArrowIcon />
      </div>
    </Container>
  );
}
