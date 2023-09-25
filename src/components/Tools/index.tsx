import Escavadeira from '../../assets/escavadeira.jpeg'
import Retroescavadeira from '../../assets/retroescavadeira.jpeg'
import CaminhãoCaçamba from '../../assets/caçamba.jpeg'
import PáCarregadeira from '../../assets/pacarregadeira.jpeg'
import { ContainerTools, GroupDiv, GroupImg, MainGroup } from './style'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
export function Tools() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 3000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )
  return(
    <ContainerTools ref={sliderRef} className="keen-slider">
      <MainGroup className="keen-slider__slide number-slide1">
         <GroupImg>
          <img src={Escavadeira} alt="" />
         </GroupImg>
        <GroupDiv>
         <h2>Escavadeira</h2>
          <p>Nossos serviços de escavadeira estão prontos para transformar seus projetos de construção, agricultura ou demolição em realidade. Com a precisão e eficiência das escavadeiras modernas, podemos realizar escavações, movimentações de terra e muito mais.</p>
         </GroupDiv>
      </MainGroup>

      <MainGroup className="keen-slider__slide number-slide2">
       
        <GroupDiv>
          <h2>Retroescavadeira</h2>
          <p>Nossos serviços de retroescavadeira oferecem a força e a versatilidade necessárias para levar seus projetos ao próximo nível. Combinando precisão e eficiência, nossa equipe especializada está pronta para atender às suas necessidades em: </p>
        </GroupDiv>
        <GroupImg>
          <img src={Retroescavadeira} alt="" />
        </GroupImg>
      </MainGroup>

      <MainGroup className="keen-slider__slide number-slide3">
        <GroupImg>
          <img src={CaminhãoCaçamba} alt="" />
        </GroupImg>
        <GroupDiv>
          <h2>Caminhão Caçamba</h2>
          <p>Nossos serviços de caminhão caçamba estão prontos para lidar com suas necessidades de transporte de grandes volumes de materiais de forma eficiente e confiável. Conte conosco.</p>
        </GroupDiv>
      </MainGroup>

      <MainGroup className="keen-slider__slide number-slide4">
      <GroupDiv>
         <h2>Pá Carregadeira</h2>
          <p>Nossos serviços de escavadeira estão prontos para transformar seus projetos de construção, agricultura ou demolição em realidade. Com a precisão e eficiência das escavadeiras modernas, podemos realizar escavações, movimentações de terra e muito mais.</p>
         </GroupDiv>
         <GroupImg>
          <img src={PáCarregadeira} alt="" />
         </GroupImg>
      
      </MainGroup>

      
      
    </ContainerTools>
  )
}