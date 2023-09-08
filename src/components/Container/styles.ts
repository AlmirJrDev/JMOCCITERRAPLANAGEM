import { styled } from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  h1{
    text-align: center;
    font-size: 40px;
    position: absolute;
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
`