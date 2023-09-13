import { ContainerContact, DivImg, FormContainer, FormGroup } from "./style";
import Escavadeira from "../../assets/escavadeira.jpeg"

export function Contact() {




  return(
    <ContainerContact id="contato">
      <DivImg>
        <img src={Escavadeira} alt="" />
      </DivImg>
     
      <FormContainer>
        <h2>Entre em contato</h2>

        <form action="">
          <FormGroup>
            <div>
              <label>Nome <span>(obrigatório)</span></label>
              <input type="text" name="Nome" id="" />
            </div>
            <div>
              <label>Sobrenome<span></span></label>
              <input type="text" name="Sobrenome" id="" />
            </div>
          </FormGroup>
          <label>Email <span>(obrigatório)</span></label>
          <input type="email" name="Sobrenome" id="" />
          <label>Mensagem <span>(obrigatório)</span></label>
          <textarea> </textarea>
          <button>Enviar</button>
        </form>
      </FormContainer>
    </ContainerContact>
  )
}