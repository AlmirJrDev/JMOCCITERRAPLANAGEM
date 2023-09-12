import { styled } from "styled-components";

export const ContainerContact = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;


 

`
export const DivImg = styled.div`
  
 

  img{
  
  object-fit: cover;
    height: 600px;
    width: 600px;

 
  }
`
export const FormContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  form{
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
  }

  label{
    align-items: flex-start;
      margin-bottom: 1rem;
      font-weight: bold;
    }

    span{
      font-weight: 500;
      color: gray
    }

    input{
      width: 400px;
      height: 40px;
    }

    textarea{
      width: 400px;
      height: 80px;

      margin-bottom: 1rem;
    }

    button{
      font-size: 15px;
      background: #000;
      border: none;
      color: #fff;
      width: 80px;
      height: 35px;
      border-radius: 15px;
      margin-bottom: 2rem;
    }
`

export const FormGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    div{
      display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    margin-right: 2rem;
    margin-bottom: 1rem;

    label{
      margin-bottom: 1rem;
      font-weight: bold;
    }

    span{
      font-weight: 500;
      color: gray
    }

    input{
      width: 180px;
      height: 40px;
    }
   }
`