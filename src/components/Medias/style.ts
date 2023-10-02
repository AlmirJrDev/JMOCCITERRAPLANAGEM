import { styled } from "styled-components";
interface ContainerProps {
  isVisible: boolean;
}

export const ContainerMedias = styled.section<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 1s ease-in-out;
  flex-direction: column;
  margin-bottom: 20rem;


  h2{
  font-size: 70px;
  font-weight: 400;
  }
`
export const LinkGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  a{
    text-decoration: none;
    color: #000 ;
   
  }

  div{
    gap: 2rem;
    margin-left: 1rem;
    margin-right: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`