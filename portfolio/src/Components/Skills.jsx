import { useEffect } from "react"
import Aos from "aos"
import styled from 'styled-components'
import FrontEnd from "./frontend"
import BackEnd from "./backend"
import Tool from "./tools"

const Skills = () => {
    useEffect(() => {
        Aos.init({duration:2000})
       })
   

  

  return (
    <div style={{backgroundColor:"#0a192f",color:'white',padding:"40px 0px 10px 0px"}}>

    <Container id='skills' data-aos='flip-left'>
      <h1 style={{ textAlign: "center" }}>Professional <span style={{color:"#c770f0"}}>Skillset</span></h1>
      <FrontEnd />
      <BackEnd />
      <Tool/>
    </Container>
    </div>
  
  )
}

const Container = styled.div`
    width:100%;
    margin:auto;
    h1{
        color:white;
        text-transform:uppercase;
       
    }
`

export default Skills