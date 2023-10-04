import { ContainerContact,  FormContainer, FormGroup } from "./style";

import { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const ContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const elementTop = ContainerRef.current?.getBoundingClientRect().top ?? 0;
      const offset = window.innerHeight * 0.8; // Ajuste este valor para controlar quando o fade-in deve ocorrer

      if (elementTop < offset) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



   const [name, setName] = useState('') 
   const [email, setEmail] = useState('')
   const [message, setMessage] = useState('')

    function sendEmail(e: React.FormEvent) {
      e.preventDefault();
      
      if(name === '' || email === '' || message === ''){
        alert("Preencha todos os campos")
      }

      const templateParams ={
        from_name: name,
        message: message,
        email: email
      }
      emailjs.send("service_sgo6wk1", "template_6jlyuo6", templateParams, "DW-kGTdaPGoXjT3ki", )
      .then((response) => {
        console.log("email enviado", response.status, response.text)
        setName('')
        setEmail('')
        setMessage('')
      }, (err) => {
        console.log('ERRO', err)
      })
    }

    
    

  return(
    <ContainerContact id="contato"  ref={ContainerRef} isVisible={isVisible}>
     
      <FormContainer>
        <h2>Entre em contato</h2>

        <form onSubmit={sendEmail}>
          <FormGroup>
            <div>
              <label htmlFor="name">Nome <span>(obrigatório)</span></label>
              <input placeholder="Nome completo." type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required/>
            </div>
        
          </FormGroup>
          <label>Email <span>(obrigatório)</span></label>
          <input placeholder="Insira seu melhor email."  type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <label>Mensagem <span>(obrigatório)</span></label>
          <textarea placeholder="Conte para nós, ." id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required> </textarea>
          <button type="submit" value="Enviar">Enviar</button>
        </form>
      </FormContainer>
    </ContainerContact>
  )
}