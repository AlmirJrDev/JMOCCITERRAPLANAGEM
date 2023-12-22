import  { useState, useEffect } from 'react';
import { Container, Image } from './styles';

// Importe as imagens SVG
import ImgMain from '../../assets/container.svg';
import Escavadeira from '../../assets/escavadeira.jpeg';
import Retroescavadeira from '../../assets/retroescavadeira.jpeg'
import CaminhãoCaçamba from '../../assets/caçamba.jpeg'
import PáCarregadeira from '../../assets/pacarregadeira.jpeg'

const images: string[] = [ImgMain, Escavadeira, Retroescavadeira, CaminhãoCaçamba, PáCarregadeira]; // Coloque todos os caminhos das imagens em um array

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


