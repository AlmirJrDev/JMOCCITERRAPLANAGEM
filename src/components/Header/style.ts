import { styled } from "styled-components";

export const HeaderDiv = styled.header`
  background: #58c689;
display: flex;
align-items: center;
justify-content: space-between;

margin-bottom: 0.5rem;

@media (max-width: 375px) {
    
    display: flex;
align-items: center;
justify-content: center;
   flex-direction: column; 
  }

ul{
   list-style-type: none;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-right: 2rem;

  a{
    text-decoration: none;
    color: #000;
    font-weight: 500;
    
  }



   
}




`
export const DivImg = styled.div`

img{
    margin: 20px 10px;
    width: 200px;
  }
  @media (max-width: 375px) {
    
    display: flex;
align-items: center;
justify-content: center;
   flex-direction: column; 

  }
`
export const UlGroup = styled.div`
  @media (max-width: 375px) {

  }
`