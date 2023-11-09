import { DivImg, HeaderDiv, UlGroup } from "./style";
import Logo from '../../assets/logo.png'

export function Header() {
  return(
    <HeaderDiv>
      <DivImg>
        <img src={Logo} alt="" />
      </DivImg>
      <UlGroup>
      
        <a href="#service">Serviços</a>
        <a href="#machine">Máquinas</a>
        <a href="#medias">Redes</a>
        <a href="#contato">Contato</a>
      
      </UlGroup>
     
    </HeaderDiv>
  )
}