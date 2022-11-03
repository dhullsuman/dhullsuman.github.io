
import React,{useEffect} from 'react'
import styled from 'styled-components';
import GithubCalendar from 'react-github-calendar'
import Aos from "aos";
import "aos/dist/aos.css";
const Github = () => {

    useEffect(() => {
        Aos.init({duration:2000})
       })

    return (
        <MainContainer style={{ marginTop: "-20px",backgroundColor: "#0a192f",color:'white',padding:"20px 0px 20px 0px" }} data-aos='zoom-in-down'>
            <h1 style={{ color: "#FFE433", textTransform: "uppercase" }}>Days I Worked</h1>
            <Container>
                <GithubCalendar username='dhullsuman'year={new Date().getFullYear()} blockSize={15} blockMargin={5} fontSize={16} />
            </Container>

            <h1 style={{ color: "white", textTransform: "uppercase" }}>my github statistics</h1>
            <Container>
                <img src="https://github-readme-streak-stats.herokuapp.com?user=dhullsuman" alt="" />
                <div>
                    <img src="https://github-readme-stats.vercel.app/api?username=dhullsuman" alt="" className="stats" />
                    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=dhullsuman" alt="" />
                </div>
            </Container>


        </MainContainer>
    )
}

const Container = styled.div`
    margin:auto;
    width:80%;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom:50px;
    flex-direction:column;
    border: 4px solid teal;
    border-radius:10px 10px 10px 10px;
    padding:30px 0px 30px 0px;
    
`



const MainContainer = styled.div`
    @media (max-width: 50em){
        display:none;
    }
`

export default Github