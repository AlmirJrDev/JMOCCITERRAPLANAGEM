import { FooterContainer, FooterGroup, Group } from "./style";

export function Footer() {
  return(
    <FooterContainer>
      <FooterGroup>
      <Group>
        <h4>Localidade</h4>
        <p> R. Itatiba, 110 Jardim Sumaré<br />Paranavaí-PR 87706-620</p>
        <a href="https://maps.app.goo.gl/zyP3VBHqmoNbDkFG9">Google Maps</a>
      </Group>
      <Group>
        <h4>Horário</h4>
        <p>De segunda a sexta <br />
        Das 7h00 ás 18:30</p>
      </Group>
      <Group>
        <h4>Contato</h4>
        <a href="mailto:jmocciterraplanagem@gmail.com?subject=Vim pelo site">jmocciterraplanagem@gmail.com</a> <br />
        <a href="https://wa.me/5544999905756">44 99990-5756</a><br />
        <a href="https://wa.me/5544998403340">44 99840-3340</a>
      </Group>

      </FooterGroup>
      <p>Powered by <a href="https://react-almir-portfolio.vercel.app/">AlmirJrDev</a>©</p>


    </FooterContainer>
  )
}