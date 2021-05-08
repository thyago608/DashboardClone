import { Container, Icon, UserProgress, BarProgress } from "./styles";

interface Props {
  data: {
    title: string;
    job: string;
    name: string;
    amount: number;
    days: number;
    avatar: string;
  };
}

export function CardSecundary({ data }: Props) {
  return (
    <Container>
      <header>
        <div>
          <h1>{data.title}</h1>
          <span>
            {data.job} | {data.name}
          </span>
        </div>
        <Icon />
      </header>

      <UserProgress>
        <img src={data.avatar} alt={data.name} />

        <div className="progress">
          <div className="percentage">
            <span>
              <strong>{data.amount}</strong>
              of 100%
            </span>
            <span>{data.days} days left</span>
          </div>
          <BarProgress className="barColor" />
        </div>
      </UserProgress>
    </Container>
  );
}
