import { styled } from "styled-components";

export const HeaderDiv = styled.header`
  background: #58c689;
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 0.5rem;

img{
    margin-left: 2rem;
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