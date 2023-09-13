import { InstagramLogo, FacebookLogo, WhatsappLogo, Envelope } from "@phosphor-icons/react";
import { ContainerMedias, LinkGroup } from "./style";


export function Medias() {
  return(
    <ContainerMedias id='medias'>
      <div>
       <h2>Siga-nos nas <br /> redes sociais</h2>
      </div>
      <LinkGroup>
        <a href=""><div> <InstagramLogo size={32} color="#000" weight="light" />Instagram</div></a>
        <a href=""><div> <FacebookLogo size={32} color="#000" weight="light" />Facebook</div></a>
        <a href=""><div> <WhatsappLogo size={32} color="#000" weight="light" />Whatsapp</div></a>
        <a href=""><div> <Envelope size={32} color="#000" weight="light" />Email</div></a> 
      </LinkGroup>
    </ContainerMedias>
  )
}