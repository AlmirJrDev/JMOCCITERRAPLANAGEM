import { Fragment } from "react"
import { Header } from "./components/Header"
import GlobalStyle from "./global/globalStyles"
import { ContainerMain } from "./components/Container"
import { Service } from "./components/Service"
import { Tools } from "./components/Tools"


function App() {
 

  return (
    <Fragment>
      <GlobalStyle/>
      <Header/>
      <ContainerMain/>
      <Service/>
      <Tools/>
   </Fragment>
  )
}

export default App