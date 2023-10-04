import { styled } from "styled-components";

interface ContainerProps {
  isVisible: boolean;
}

export const ContainerTools = styled.section`
  display: flex;
  background: #58c689;
  
`
export const MainGroup = styled.div<ContainerProps>`
    display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5rem;
  margin-top: 2rem;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 1s ease-in-out;
`
export const GroupImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  img{
  
    width: 70%;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
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
  
  width: 50%;
}
`