import { styled } from "styled-components";

interface ContainerProps {
  isVisible: boolean;
}
export const SectionService = styled.section<ContainerProps>`
display: flex;
background: #f8fcff;
align-items: center;
justify-content: center;
flex-direction: column;
   /* Efeito de fade-in */
   opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 1s ease-in-out;

h2{
  margin-top: 4rem;
  font-family: 'Montserrat', sans-serif;
  color: #85c300;
  font-weight: bold;
  font-size: 40px;
}
`

export const DivGroup = styled.div`
    margin: 32px 0px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 24px;

    p {
      color: #616161;
    }
    h4{
      font-size: 20px;
      color: #85c300;
      font-family: 'Montserrat', sans-serif;
  font-weight: 700;
      padding-left: 16px;
      border-left: 3px solid #00fd8f;
    }

div{
  width: 25%;
padding: 32px 0;
}
`