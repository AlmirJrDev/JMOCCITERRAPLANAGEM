import { styled } from "styled-components";

interface ContainerProps {
  isVisible: boolean;
}

export const ContainerTools = styled.section`
  display: flex;
  background: #58c689;

  @media (max-width: 375px) {
    display: flex;
   
   
   
  }
 
`
export const MainGroup = styled.div<ContainerProps>`
    display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5rem;
  margin-top: 2rem;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 1s ease-in-out;

  @media (max-width: 375px) {
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
  
  
  @media (max-width: 375px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    img{
      
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

@media (max-width: 375px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h2{
      font-size: 30px;
    }
    p{
      width: 100%;
  color: #fff;
  font-size: 15px;
  width: 50%;
}
    img{
      width: 100%;
      border-radius: 0;
      object-fit: cover;
    }
  }                             
`