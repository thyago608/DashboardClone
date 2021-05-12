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
  AddIcon,
  MoreIcon,
  Tertiary,
  DocumentIcon
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
import women2 from "../assets/avatar/women2.svg";
import man from "../assets/avatar/man.svg";

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
                <MoreIcon />
              </li>
              <li>
                <ProjectIcon />
                Projects
                <MoreIcon />
              </li>
              <li>
                <PlanningIcon />
                Planning
                <MoreIcon />
              </li>

              <li>
                <MessagesIcon />
                Messages
                <MoreIcon />
              </li>
              <li>
                <CalendarIcon />
                Calendar
                <MoreIcon />
              </li>
              <li>
                <PeoplesIcon />
                People
                <MoreIcon />
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
                <CardSecundary key={project.name} data={project} />
              ))}

              <Tertiary className="tertiary">
                <img src={women2} alt="" />
                <div className="info-person">
                  <span>Lola Fora</span>
                  <span>3 minutes ago</span>

                  <a href="#">
                    <DocumentIcon />
                    Flover brief.pdf
                  </a>
                </div>
              </Tertiary>

              <div className="tertiary-minimal">
                <img src={man} alt="" />
                <div className="info-person">
                  <span>Lola Fora</span>
                  <span>3 minutes ago</span>

                  <strong>"Flover"</strong>
                </div>
              </div>
            </Column>
          </div>
        </ColumnRight>
      </Wrapper>
    </Container>
  );
}
