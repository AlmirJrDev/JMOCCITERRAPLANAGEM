import  { useState, useEffect } from 'react';
import { Container } from './styles';

// Importe as imagens SVG
import ImgMain from '../../assets/container.svg';
import Escavadeira from '../../assets/escavadeira.jpeg';
import Retroescavadeira from '../../assets/retroescavadeira.jpeg'
import CaminhãoCaçamba from '../../assets/caçamba.jpeg'
import PáCarregadeira from '../../assets/pacarregadeira.jpeg'

const images: string[] = [ImgMain, Escavadeira, Retroescavadeira, CaminhãoCaçamba, PáCarregadeira]; // Coloque todos os caminhos das imagens em um array

export function ContainerMain() {
  
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  useEffect(() => {
    // Escolha uma imagem aleatoriamente quando o componente montar
    const randomIndex = Math.floor(Math.random() * images.length);
    setCurrentImage(images[randomIndex]);
  }, []);

  return (
    <Container>
      {currentImage && <img src={currentImage} alt="Imagem aleatória" />}
      <h1>
        JMOCCI <br />
        Terraplanagem
      </h1>
    </Container>
  );
}


