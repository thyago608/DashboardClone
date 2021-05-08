import {
  Container,
  InputSearch,
  SearchIcon,
  ContainerAvatar,
  MoreIcon
} from "./styles";
import avatarMan from "../../assets/avatar/man.svg";
import avatarWoman01 from "../../assets/avatar/women.svg";
import avatarWoman02 from "../../assets/avatar/women2.svg";
import avatarWoman03 from "../../assets/avatar/women3.svg";
export function Header() {
  return (
    <Container>
      <div className="wrapper">
        <InputSearch>
          <input type="search" placeholder="Search project" />
          <SearchIcon />
        </InputSearch>

        <ContainerAvatar>
          <img src={avatarMan} alt="man" />
          <img src={avatarWoman01} alt="women" />
          <img src={avatarWoman02} alt="women" />
          <img src={avatarWoman03} alt="women" />

          <button>
            <MoreIcon />
          </button>
        </ContainerAvatar>
      </div>
    </Container>
  );
}
