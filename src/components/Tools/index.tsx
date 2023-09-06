import Escavadeira from '../../assets/escavadeira.jpeg'
import Retroescavadeira from '../../assets/retroescavadeira.jpeg'
import CaminhãoCaçamba from '../../assets/caçamba.jpeg'
import { ContainerTools, GroupDiv, GroupImg, MainGroup } from './style'
export function Tools() {
  return(
    <ContainerTools>
      <MainGroup>
         <GroupImg>
          <img src={Escavadeira} alt="" />
         </GroupImg>
        <GroupDiv>
         <h2>Escavadeira</h2>
          <p>Nossos serviços de escavadeira estão prontos para transformar seus projetos de construção, agricultura ou demolição em realidade. Com a precisão e eficiência das escavadeiras modernas, podemos realizar escavações, movimentações de terra e muito mais.</p>
         </GroupDiv>
      </MainGroup>

      <MainGroup>
       
        <GroupDiv>
          <h2>Retroescavadeira</h2>
          <p>Nossos serviços de retroescavadeira oferecem a força e a versatilidade necessárias para levar seus projetos ao próximo nível. Combinando precisão e eficiência, nossa equipe especializada está pronta para atender às suas necessidades em: </p>
        </GroupDiv>
        <GroupImg>
          <img src={Retroescavadeira} alt="" />
        </GroupImg>
      </MainGroup>

      <MainGroup>
        <GroupImg>
          <img src={CaminhãoCaçamba} alt="" />
        </GroupImg>
        <GroupDiv>
          <h2>Caminhão Caçamba</h2>
          <p>Nossos serviços de caminhão caçamba estão prontos para lidar com suas necessidades de transporte de grandes volumes de materiais de forma eficiente e confiável. Conte conosco.</p>
        </GroupDiv>
      </MainGroup>
      
    </ContainerTools>
  )
}