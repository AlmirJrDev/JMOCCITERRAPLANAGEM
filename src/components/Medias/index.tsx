import { InstagramLogo, FacebookLogo, WhatsappLogo, Envelope } from "@phosphor-icons/react";
import { ContainerMedias, LinkGroup } from "./style";


export function Medias() {
  return(
    <ContainerMedias id='medias'>
      <div>
       <h2>Siga-nos nas <br /> redes sociais</h2>
      </div>
      <LinkGroup>
        <a href="https://www.instagram.com/mocci_terraplanagem/"><div> <InstagramLogo size={32} color="#000" weight="light" />Instagram</div></a>
        <a href="https://www.facebook.com/terraplanagemj.mocci/?locale=pt_BR"><div> <FacebookLogo size={32} color="#000" weight="light" />Facebook</div></a>
        <a href="https://wa.me/5544999905756"><div> <WhatsappLogo size={32} color="#000" weight="light" />Whatsapp</div></a>
        <a href="mailto:jmocciterraplanagem@gmail.com?subject=Vim pelo site"><div> <Envelope size={32} color="#000" weight="light" />Email</div></a> 
      </LinkGroup>
    </ContainerMedias>
  )
}