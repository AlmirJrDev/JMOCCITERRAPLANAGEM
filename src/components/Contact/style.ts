import { styled } from "styled-components";

interface ContainerProps {
  isVisible: boolean;
}

export const ContainerContact = styled.section<ContainerProps>`
padding: 5rem 0;
background: linear-gradient(91deg,#58c689,#24a562,#24a562,#345427);
  background-size: 240% 240%;
  animation: gradient-animation 12s ease infinite;


@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
  display: flex;
  align-items: center;
  justify-content: space-between;

   /* Efeito de fade-in */
 opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 1s ease-in-out;


 

`
export const DivImg = styled.div`
  
 

  img{
  
  object-fit: cover;
    height: 600px;
    width: 600px;

 
  }
`
export const FormContainer = styled.div`
  h2{
    color: #000
  }
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  form{
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
  }

  label{
    align-items: flex-start;
      margin-bottom: 1rem;
      font-weight: bold;
    }

    span{
      font-weight: 500;
      color: gray
    }

    input{
      margin-bottom: 1rem;
      width: 400px;
      height: 40px;
      padding-left: 4px;
    }

    textarea{
      width: 400px;
      height: 80px;
      padding-left: 4px;

      margin-bottom: 1rem;
    }

    button{
      font-size: 15px;
      background: #fff;
      border: 2px solid;
      color: #000;
      cursor: pointer;
      font-weight: bold;
      width: 400px;
      height: 40px;
      border-radius: 15px;
      margin-bottom: 2rem;
      transition: ease-in-out 0.2s;
      
      &:hover{
      background: #004f40;
      color: #fff;
    }
    }

    @media (max-width: 700px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    input{
      width: 300px;
      height: 40px;
    }

    textarea{
      width: 300px;
      height: 80px;
    }

    button{
      width: 300px;
    }
  }


`

