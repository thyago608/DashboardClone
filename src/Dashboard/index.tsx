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
  Column
} from "./styles";

import { Header } from "../Header";
import { Card } from "../Card";

import logo from "../assets/images/logo.png";
import flover from "../assets/images/flover.png";
import more from "../assets/images/more.png";
import strap from "../assets/images/strap.png";
import tabma from "../assets/images/tabma.png";

export function Dashboard() {
  return (
    <Container>
      <Wrapper>
        <div className="column-left">
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
            <span>More Productivity{"\n"}With Premiumn</span>
            <img src={more} alt="" />
          </More>
        </div>

        <div className="column-right">
          <Header />
          <div className="wrapper-column-right">
            <Column>
              <header>
                <h1>New Projects</h1>
                <span>+7 new</span>
              </header>
              <Card
                data={{
                  title: "Sold Iron Company",
                  company: "Max Shu",
                  amount: 3,
                  image: strap
                }}
              />
            </Column>

            <Column>
              <header>
                <h1>New Projects</h1>
                <span>+7 new</span>
              </header>
              <Card
                data={{
                  title: "Strap E-commerce",
                  company: "Lara Dent",
                  amount: 4,
                  image: tabma
                }}
              />
            </Column>

            <Column>
              <header>
                <h1>New Projects</h1>
                <span>+7 new</span>
              </header>
              <Card
                data={{
                  title: "Tabma Bank Landing",
                  company: "Lara Dent",
                  amount: 3
                }}
              />
            </Column>
          </div>
        </div>
      </Wrapper>
    </Container>
  );
}
