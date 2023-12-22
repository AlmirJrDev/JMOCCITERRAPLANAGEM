import { styled } from "styled-components";
export const Image = styled.img<{ visible: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  margin-top: 50rem;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 1s ease-in-out;
`;

export const Container = styled.section`
  display: flex;
  align-items: center;
  background: #fff;
  justify-content: center;

  margin-bottom: 52rem;
  

  h1{
    text-align: center;
    font-size: 40px;
    position: absolute;
    margin-top: 50rem;
    color: #fff;
    font-family: 'Montserrat', sans-serif;
  }

  img{
    object-fit: cover;
    border-radius: 20px;
    width: 1200px;
    height: 800px;
    filter: brightness(50%); 
  }

  @media (max-width: 700px) {
    
    img{
      width: 100%;
      border-radius: 0;
      object-fit: cover;
    }
  }
`