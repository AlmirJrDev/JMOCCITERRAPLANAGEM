import { Fragment } from "react"
import { Header } from "./components/Header"
import GlobalStyle from "./global/globalStyles"
import { ContainerMain } from "./components/Container"
import { Service } from "./components/Service"
import { Tools } from "./components/Tools"
import { Medias } from "./components/Medias"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"


function App() {
 

  return (
    <Fragment>
      <GlobalStyle/>
      <Header/>
      <ContainerMain/>
      <Service/>
      <Tools/>
      <Medias/>
      <Contact/>
      <Footer/>
   </Fragment>
  )
}

export default App
