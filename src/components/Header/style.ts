import { styled } from "styled-components";

export const HeaderDiv = styled.header`
  background: #58c689;
display: flex;
align-items: center;
justify-content: space-between;

margin-bottom: 0.5rem;

@media (max-width: 700px) {
    
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

 

  a{
    display: flex;
  align-items: center;
  justify-content: center;
    text-decoration: none;
    color: #000;
    font-weight: 700;
   
    border-radius: 5px;

    transition: 0.2s ease-in-out;
    background: #aeff00;
    padding: 0.25rem;
    margin-right: 0.5rem;
   

    &:hover{
      
      color: #fff;  
    
    background: #58c6;
    }
    
  }



   
}




`
export const DivImg = styled.div`

img{
    margin: 2rem;
    width: 200px;
  }
  @media (max-width: 700px) {
    
    display: flex;
align-items: center;
justify-content: center;
  

   
  }

 
`
export const UlGroup = styled.div`

`