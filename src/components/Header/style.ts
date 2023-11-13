import { styled } from "styled-components";

// $emerald-400: #58c689;
// $emerald-500: #24a562;
// $emerald-600: #16854d;
// $emerald-700: #126a40;

export const HeaderDiv = styled.header`
  background: rgb(88,198,137);
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
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
    
    
   

    &:hover{
      
      color: #fff;  
  
    }
    
  }



   
}




`
export const DivImg = styled.div`

img{
    margin: 2rem;
    width: 190px;
  }
  @media (max-width: 700px) {
    
    display: flex;
align-items: center;
justify-content: center;
  

   
  }
`
export const UlGroup = styled.div`

background: #1acd81;
box-shadow: rgb(1, 1, 17) 0px 20px 30px -20px;
 padding: 1rem;
border-radius: 20px;
 margin-right: 2rem;


a{
  

  color: white;
  margin: 1rem 1rem;
  text-decoration: none;
  font-weight: bold;
  
}
 @media (max-width: 700px) {
    
  display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
    margin: 0 auto;
    padding:  0;
    margin-bottom: 1rem;
    width: 97%;
  
   
  }
`