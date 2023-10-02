import { HeaderDiv } from "./style";
import Logo from '../../assets/logo.svg'

export function Header() {
  return(
    <HeaderDiv>
      <div>
        <img src={Logo} alt="" />
      </div>
      <ul>

       <li><a href="#service">Serviços</a></li>
       <li><a href="#machine">Nossas Máquinas</a></li>
        <li><a href="#medias">Redes</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </HeaderDiv>
  )
}