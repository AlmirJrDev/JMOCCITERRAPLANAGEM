import { styled } from "styled-components";

interface ContainerProps {
  isVisible: boolean;
}

export const ContainerTools = styled.section`
  display: flex;
  background: rgb(88,198,137);
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

  @media (max-width: 375px) {
    display: flex;
   
   
   
  }
 
`
export const MainGroup = styled.div<ContainerProps>`
overflow-x: hidden;
    display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5rem;
  margin-top: 2rem;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 1s ease-in-out;

  @media (max-width: 700px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
   
  }
`
export const GroupImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  img{
  
    width: 80%;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  }
  
  
  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    img{
      width: 50%;
    }
  }
`


export const GroupDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;



h2{
  font-size: 70px;
  font-weight: 400;
  color: #fff;
  }

p{
  color: #fff;
  font-size: 20px;
  width: 50%;
}

@media (max-width: 700px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h2{
      font-size: 30px;
    }
    p{
      display: none;
}
  
  }                             
`