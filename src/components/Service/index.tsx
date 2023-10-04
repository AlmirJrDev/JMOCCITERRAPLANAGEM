import { Handshake, Trash, Truck } from "@phosphor-icons/react";
import { DivGroup, SectionService } from "./style";
import { useEffect, useState, useRef } from "react";

export function Service() {
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

  return(
    <SectionService id="service"  ref={ContainerRef} isVisible={isVisible}>
      <div>
        <h2>Nossos serviços</h2>
      </div>
      <DivGroup>
        <div>
          <h4>Limpeza de terreno <Trash size={32} /></h4>
          <p>A limpeza de terreno é um conjunto de serviços essenciais para preparar, manter e restaurar áreas de terra. Essas atividades visam remover detritos, vegetação indesejada e outros obstáculos que possam comprometer a utilidade e a estética do terreno.</p>
        </div>
        <div>
          <h4>Perfuratriz</h4>
          <p>Uma perfuratriz é uma máquina utilizada para fazer furos ou perfurações em diferentes tipos de materiais, como solo, rochas ou concreto, geralmente usada na construção civil, mineração e perfuração de poços.</p>
        </div>
        <div>
          <h4> Deslocamento de terra <Truck size={32} /> </h4>
          <p>O deslocamento de terra é o processo de movimentação de solo, pedras e outros materiais da superfície da Terra, geralmente realizado para nivelar terrenos, construir estradas, edifícios e outras obras de engenharia civil.</p>
        </div>

      </DivGroup>
      <DivGroup>

      <div>
        
    
          <h4>Terraplanagem</h4>
          <p>A terraplanagem não é apenas nivelar o solo; é criar uma base sólida para seus projetos. Trabalhamos em estreita colaboração com você para entender suas necessidades e oferecer soluções personalizadas que atendam aos seus objetivos.</p>
        </div>

        <div>
          <h4>Aluguel de Maquinas</h4>
          <p>Se você precisa de equipamentos pesados para um projeto específico, nossa empresa oferece uma variedade de máquinas disponíveis para aluguel. Nossa frota é mantida regularmente e está pronta para atender às suas demandas, garantindo eficiência e economia.</p>
        </div>

           
        <div>
          <h4>Comprometidos com a Qualidade e a Satisfação do Cliente <Handshake size={32} /></h4>
          <p>Na JMOCCI Terraplanagem, a qualidade é nossa prioridade. Trabalhamos com rigorosos padrões de segurança e qualidade, garantindo que cada projeto seja concluído com excelência. Nossa equipe está pronta para ouvir suas necessidades e superar suas expectativas.</p>
        </div>    

      </DivGroup>
    
    </SectionService>
  )
}