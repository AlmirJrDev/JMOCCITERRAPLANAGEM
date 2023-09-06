import { HeaderDiv } from "./style";
import Logo from '../../assets/logo.svg'

export function Header() {
  return(
    <HeaderDiv>
      <div>
        <img src={Logo} alt="" />
      </div>
      <ul>
       <li><a href="">Sobre</a></li>
       <li><a href="">Serviços</a></li>
        <li><a href="">Redes</a></li>
        <li><a href="">Contato</a></li>
      </ul>
    </HeaderDiv>
  )
}