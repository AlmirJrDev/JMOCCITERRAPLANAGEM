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
  }

  img{
    object-fit: cover;
    border-radius: 20px;
    width: 90%;
    height: 40%;
    filter: brightness(50%); 
  }
`