import { styled } from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  a{
    font-weight: bold;
  
  color: #0049E6;
}


`
export const FooterGroup = styled.div`
   display: flex;
  align-items: center;
  justify-content: center;


  @media (max-width: 700px) {
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;


} 


  
`
export const FooterGroupPowered = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a{
  margin-top: 0.1rem;
   margin-left: 0.5rem;
  }
`
export const Group = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin: 4rem;
a{
  font-weight: bold;
  text-decoration: none;
  color: #0049E6;
}

`
