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
  ArrowRightIcon
} from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Wrapper>
        <img src="" alt="logo" />
        <nav>
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
            <li>People</li>
          </ul>
        </nav>
      </Wrapper>
    </Container>
  );
}
