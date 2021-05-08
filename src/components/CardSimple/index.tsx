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
    amount: number;
  };
}

export function CardSimple({ data }: CardProps) {
  return (
    <Container>
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
