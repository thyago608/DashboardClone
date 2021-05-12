import {
  Container,
  GlobalIcon,
  ChartIcon,
  PeopleIcon,
  ArrowIcon,
  CheckIcon
} from "./styles";

interface CardProps {
  data: {
    title: string;
    company: string;
    image?: string;
    amount: number;

    peoplesCount: boolean;
  };
}

export function CardPrimary({ data }: CardProps) {
  return (
    <Container peoples={data.peoplesCount}>
      <img src={data.image} alt={data.title} />
      <h1>{data.title}</h1>
      <span>Project Manager | {data.company}</span>

      <div className="wrapper">
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
          {data.peoplesCount && (
            <div>
              <PeopleIcon />
              <span>{data.amount} Peoples</span>
            </div>
          )}

          {data.peoplesCount ? (
            <ArrowIcon />
          ) : (
            <button>
              <CheckIcon />
            </button>
          )}
        </div>
      </div>
    </Container>
  );
}
