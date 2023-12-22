import Escavadeira from '../../assets/escavadeira.jpeg'
import Retroescavadeira from '../../assets/retroescavadeira.jpeg'
import CaminhãoCaçamba from '../../assets/caçamba.jpeg'
import PáCarregadeira from '../../assets/pacarregadeira.jpeg'
import BobCat from '../../assets/bobcat.jpeg'
import MiniEscavadeira from '../../assets/miniescavadeira.jpeg'

import { ContainerTools, GroupDiv, GroupImg, MainGroup } from './style'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useEffect, useState, useRef } from "react";
export function Tools() {
  const [isVisible, setIsVisible] = useState(false);
  const ContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const elementTop = ContainerRef.current?.getBoundingClientRect().top ?? 0;
      const offset = window.innerHeight * 0.8; // Ajuste este valor para controlar quando o fade-in deve ocorrer

      if (elementTop < offset) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
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
          }, 13000)
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
    <ContainerTools id='machine' ref={sliderRef} className="keen-slider" >
      <MainGroup ref={ContainerRef} isVisible={isVisible} className="keen-slider__slide number-slide1">
         <GroupImg>
          <img src={Escavadeira} alt="" />
         </GroupImg>
        <GroupDiv>
         <h2>Escavadeira</h2>
          <p>Nossos serviços de escavadeira estão prontos para transformar seus projetos de construção, agricultura ou demolição em realidade. Com a precisão e eficiência das escavadeiras modernas, podemos realizar escavações, movimentações de terra e muito mais.</p>
         </GroupDiv>
      </MainGroup>

      <MainGroup ref={ContainerRef} isVisible={isVisible}className="keen-slider__slide number-slide2">
       
        <GroupDiv>
          <h2>Retroescavadeira</h2>
          <p>Nossos serviços de retroescavadeira oferecem a força e a versatilidade necessárias para levar seus projetos ao próximo nível. Combinando precisão e eficiência, nossa equipe especializada está pronta para atender às suas necessidades em: </p>
        </GroupDiv>
        <GroupImg>
          <img src={Retroescavadeira} alt="" />
        </GroupImg>
      </MainGroup>

      <MainGroup ref={ContainerRef} isVisible={isVisible} className="keen-slider__slide number-slide3">
        <GroupImg>
          <img src={CaminhãoCaçamba} alt="" />
        </GroupImg>
        <GroupDiv>
          <h2>Caminhão Caçamba</h2>
          <p>Nossos serviços de caminhão caçamba estão prontos para lidar com suas necessidades de transporte de grandes volumes de materiais de forma eficiente e confiável. Conte conosco.</p>
        </GroupDiv>
      </MainGroup>

      <MainGroup ref={ContainerRef} isVisible={isVisible} className="keen-slider__slide number-slide4">
      <GroupDiv>
         <h2>Pá Carregadeira</h2>
          <p>Nossos serviços de escavadeira estão prontos para transformar seus projetos de construção, agricultura ou demolição em realidade. Com a precisão e eficiência das escavadeiras modernas, podemos realizar escavações, movimentações de terra e muito mais.</p>
         </GroupDiv>
         <GroupImg>
          <img src={PáCarregadeira} alt="" />
         </GroupImg>
      
      </MainGroup>

      <MainGroup ref={ContainerRef} isVisible={isVisible} className="keen-slider__slide number-slide3">
        <GroupImg>
          <img src={BobCat} alt="" />
        </GroupImg>
        <GroupDiv>
          <h2>Mini Carregadeira <br />BobCat</h2>
          <p>Essa máquina é essencial para carregar e transportar diferentes tipos de materiais, desde terra até materiais de construção. Sua capacidade de acoplar diversos acessórios a torna uma ferramenta adaptável, permitindo realizar tarefas como nivelamento, escavação e carregamento com facilidade. </p>
        </GroupDiv>
      </MainGroup>

      <MainGroup ref={ContainerRef} isVisible={isVisible} className="keen-slider__slide number-slide4">
      <GroupDiv>
         <h2>Mini Escavadeira</h2>
          <p>Com sua capacidade compacta, a mini escavadeira permite acesso a áreas restritas, agilizando a escavação e remoção de solo de maneira precisa. Sua versatilidade se destaca na execução de tarefas como nivelamento de terreno, escavação de valas e preparação de terreno para construção. </p>
         </GroupDiv>
         <GroupImg>
          <img src={MiniEscavadeira} alt="" />
         </GroupImg>
      
      </MainGroup>

      
      
    </ContainerTools>
  )
}