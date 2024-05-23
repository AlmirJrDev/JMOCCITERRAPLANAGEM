import { DivImg, HeaderDiv, UlGroup } from "./style";
import Logo from '../../assets/logo.svg'

export function Header() {
  return(
    <HeaderDiv>
      <DivImg>
        <img src={Logo} alt="" />
      </DivImg>
      <UlGroup>
  <ul>
    <li><a href="#service">Serviços</a></li>
    <li><a href="#machine">Máquinas</a></li>
    <li><a href="#medias">Redes</a></li>
    <li><a href="#contato">Contato</a></li>
  </ul>
</UlGroup>

     
    </HeaderDiv>
  )
}