import { CaretCircleDoubleDown, CurrencyCircleDollar, Handshake, RoadHorizon, Trash, Truck } from "@phosphor-icons/react";
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
          <p>Utilizamos nossas máquinas para a limpeza de terrenos, independentemente do tamanho. Dispomos de equipamentos adequados tanto para tarefas de maior porte quanto para serviços mais compactos.</p>
        </div>
        <div>
          <h4>Perfuratriz <CaretCircleDoubleDown size={32} /></h4>
          <p>A perfuratriz é uma máquina que utilizamos para fazer furos ou perfurações em diferentes tipos de materiais, como solo, rochas ou concreto, geralmente usamos na construção civil, mineração e perfuração de poços.</p>
        </div>
        <div>
          <h4>Deslocamento<Truck size={32} /> </h4>
          <p>Caso seja necessário remover terra ou transportá-la para outro local, nossos caminhões-caçamba estão à disposição para executar o serviço de forma prática e conveniente para você.</p>
        </div>

      </DivGroup>
      <DivGroup>

      <div>
        
    
          <h4>Terraplanagem <RoadHorizon size={32} /></h4>
          <p>Além disso, estamos capacitados para efetuar o processo de terraplanagem e nivelamento do terreno, transformando-o em uma nova oportunidade para você.</p>
        </div>

        <div>
          <h4>Aluguel de Maquinas <CurrencyCircleDollar size={32} /></h4>
          <p>Se você precisa de equipamentos pesados para um projeto específico, nossa empresa oferece uma variedade de máquinas disponíveis para aluguel. Nossa frota é mantida regularmente e está pronta para atender às suas demandas, garantindo eficiência e economia.</p>
        </div>

           
        <div>
          <h4>Qualidade <Handshake size={32} /></h4>
          <p>Na JMOCCI Terraplanagem, a qualidade é nossa prioridade. Trabalhamos com rigorosos padrões de segurança e qualidade, garantindo que cada projeto seja concluído com excelência. Nossa equipe está pronta para ouvir suas necessidades e superar suas expectativas.</p>
        </div>    

      </DivGroup>
    
    </SectionService>
  )
}