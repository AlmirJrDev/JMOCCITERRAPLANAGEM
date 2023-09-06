import { styled } from "styled-components";

export const ContainerTools = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const MainGroup = styled.div`
    display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20rem;
  margin-top: 2rem;
`
export const GroupImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  img{
  
    width: 75%;
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
  }

p{
  width: 50%;
}
`