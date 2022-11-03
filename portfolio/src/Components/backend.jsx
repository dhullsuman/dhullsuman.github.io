import React, { useEffect } from 'react'
import styled from 'styled-components'
import node from '../Images/node.jpeg';
import express from "../Images/expres.jpeg"
import mongodb from "../Images/mogo.jpeg"
import redux from "../Images/redux.jpeg"
import Aos from "aos";
import "aos/dist/aos.css";

const BackEnd = () => {
    useEffect(() => {
        Aos.init({duration:2000})
       })
    const skills = [
        {
            img:node,
            title:'Nodejs'
        },
        {
            img:express,
            title:'Express'
        },
        {
            img:redux,
            title:'Redux'
        },
        {
            img:mongodb,
            title:'MongoDB'
        },
    ]

  

  return (
    <Container data-aos='flip-left'>
        <h1 style={{textAlign:"center"}}>Backend</h1>
        <div className='skillsContainer'>
            {skills.map((ele,index)=>(
                <div key={index} style={{color:"black",border:"5px solid #c770f0", background:"white",fontWeight:"bold", fontSize:"22px"}}>
                    <img src={ele.img} alt={ele.title} width='70px' height='70px'/>
                <p >{ele.title}</p>
                </div>
             ))} 
        </div>
    </Container>
  )
}

const Container = styled.div`
    width:100%;
    margin:auto;

    .skillsContainer{
        width:95%;
        margin:auto;
        display:grid;
        grid-template-columns: repeat(auto-fit,minmax(120px,max-content));
        justify-content:center;
        padding:30px;
        gap:20px;
    }

    .skillsContainer>div{
       display:flex;
       align-items:center;
       flex-direction:column;
       box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
       padding: 20px 0px 10px 0px;
       border-radius: 10px;
    }

    .skillsContainer>div:hover{
        -webkit-transform: translateY(-5px);
        transform: translateY(-15px);
        -webkit-transition: all 0.5s;
        transition: all 0.8s;
     }
   
`

export default BackEnd