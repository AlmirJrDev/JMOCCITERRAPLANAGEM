import  { useState, useEffect } from 'react';
import { Container, Image } from './styles';

// Importe as imagens SVG
import ImgMain from '../../assets/container.svg';
import Escavadeira from '../../assets/escavadeira.jpeg';
import Retroescavadeira from '../../assets/retroescavadeira.jpeg'
import CaminhãoCaçamba from '../../assets/caçamba.jpeg'
import PáCarregadeira from '../../assets/pacarregadeira.jpeg'
import BobCatHome from '../../assets/bobcathome.jpeg'
import BobCatHome2 from '../../assets/bobcathome2.jpeg'
import CaçambaHome from '../../assets/caçambahome.jpeg'
import EscavadeiraHome from '../../assets/escavadeirahome.jpeg'
import FrotaHome from '../../assets/frota.jpeg'
import MiniEscavaideiraHome from '../../assets/escavadeirahome.jpeg'
import PáHome from '../../assets/pahome.jpeg'
import PáHome2 from '../../assets/pahome2.jpeg'
import Plataformahome from '../../assets/plataformahome.jpeg'

const images: string[] = [ImgMain, Escavadeira, Retroescavadeira, CaminhãoCaçamba, PáCarregadeira, BobCatHome,  BobCatHome2, CaçambaHome, EscavadeiraHome, FrotaHome, MiniEscavaideiraHome, PáHome, PáHome2, Plataformahome ]; // Coloque todos os caminhos das imagens em um array

export function ContainerMain() {
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <Container>
       {images.map((imageUrl, index) => (
        <Image
          key={index}
          src={imageUrl}
          alt={`Imagem ${index + 1}`}
          visible={index === currentImageIndex}
        />
      ))}
      <h1>
        J.MOCCI <br />
        Terraplanagem
      </h1>
    </Container>
  );
}


