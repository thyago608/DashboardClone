import { Container, DocumentIcon } from "./styles";
import women2 from "../../assets/avatar/women2.svg";

export function Tertiary() {
  return (
    <Container className="tertiary">
      <img src={women2} alt="" />
      <div className="info-person">
        <span>Lola Fora</span>
        <span>3 minutes ago</span>

        <a href="#">
          <DocumentIcon />
          Flover brief.pdf
        </a>
      </div>
    </Container>
  );
}
