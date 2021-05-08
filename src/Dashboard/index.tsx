import {
  Container,
  Wrapper,
  Navigation,
  DashboardIcon,
  ProjectIcon,
  PlanningIcon,
  MessagesIcon,
  CalendarIcon,
  PeoplesIcon,
  ArrowRightIcon,
  More,
  Column,
  ColumnLeft,
  ColumnRight,
  AddIcon
} from "./styles";

import { Header } from "../components/Header";
import { CardPrimary } from "../components/CardPrimary";
import { CardSecundary } from "../components/CardSecundary";
import { CardSimplePrimary } from "../components/CardSimplePrimary";
import { CardSimpleSecundary } from "../components/CardSimpleSecundary";

import { Projects, Progress } from "../assets/data";

import logo from "../assets/images/logo.png";
import more from "../assets/images/more.png";
import flover from "../assets/images/flover.png";

export function Dashboard() {
  return (
    <Container>
      <Wrapper>
        <ColumnLeft>
          <img src={logo} alt="logo" />
          <Navigation>
            <ul>
              <li>
                <DashboardIcon />
                Dashboard
              </li>
              <li>
                <ProjectIcon />
                Projects
              </li>
              <li>
                <PlanningIcon />
                Planning
              </li>

              <li>
                <MessagesIcon />
                Messages
              </li>
              <li>
                <CalendarIcon />
                Calendar
              </li>
              <li>
                <PeoplesIcon />
                People
              </li>
            </ul>
          </Navigation>

          <More>
            <ArrowRightIcon />
            <span>More Productivity</span>
            <span>With Premium</span>
            <img src={more} alt="" />
          </More>
        </ColumnLeft>

        <ColumnRight>
          <Header />
          <div className="wrapper-columns">
            <Column>
              <header>
                <h1>
                  New Projects
                  <span>+7 new</span>
                </h1>
              </header>
              <CardSimplePrimary
                data={{
                  title: "Sold Iron Company",
                  company: "Max Shu",
                  amount: 3
                }}
              />

              <CardSimpleSecundary
                data={{
                  title: "Flover Branding",
                  company: "Max Shu",
                  image: flover
                }}
              />

              <button className="add-project">
                <AddIcon />
                Add New Project
              </button>
            </Column>

            <Column>
              <header>
                <h1>Priority projects</h1>
              </header>

              {Projects.map((project) => (
                <CardPrimary data={project} />
              ))}
            </Column>

            <Column>
              <header>
                <h1>Task Progress</h1>
              </header>

              {Progress.map((project) => (
                <CardSecundary data={project} />
              ))}
            </Column>
          </div>
        </ColumnRight>
      </Wrapper>
    </Container>
  );
}
