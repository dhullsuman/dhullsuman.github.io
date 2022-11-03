import React, { useEffect } from "react";
import styled from "styled-components";
import { Box,Avatar } from "@mui/material";

// import Typical from "react-typical";
import Aos from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div id="about">
      <Container>
      <h1 style={{ textAlign: "center",color:"white" }}>About</h1>
        <div className="aboutBox">
          <div className="about_leftBox">
            {/* <h1>Hi, I'm Suman</h1> */}
            <p>
              Hello stranger! 👋, my name is{" "}
              <span style={{ color: "#cd5ff8" }}>Suman</span> and I am a
              Full Stack Developer, passionate about building digital products
              that improve everyday experience for people.
            </p>
            <p>
              I am Quick learner and an aspiring full-stack web developer with
              core knowledge of MERN stack technology. Looking forward to
              applying and enhancing my skills and knowledge as a developer.
            </p>
           
          </div>
          <div className="about_rightBox">
          <Box
          sx={{
            width: { lg: "50%", sm: "100%", xs: "100%" },
            display: "flex",
            justifyContent: "center",
            alignItem: "center",
          }}
        >
          <Avatar
            src="./img1.JPG"
            alt="Suman"
            sx={{ width: "100%", height: "100%" }}
          />
        </Box>
          </div>
        </div>
      </Container>
    </div>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  background-color:#191327;
  padding-top:10px;
  
//   background-image:url("./logo1.JPG")
  a {
    text-decoration: none;
  }

  .aboutBox {
    width: 80%;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding:50px 0px 20px 0px;
  }

  .typical {
    color: teal !important;
    // border:1px solid black;

    font-weight: 700 !important;
    font-size: 30px !important;
  }

  .about_leftBox {
    width: 50%;
    text-align: left;
    padding: 10px;
  }

  .about_leftBox > h1 {
    font-size: 30px;
    line-height: 10px;
  }

  .about_leftBox > p {
    color: black;
    font-size: 17px;
    font-weight: 500;
    color:#fff;
  }

  .about_leftBox button {
    padding: 12px 20px 12px 20px;
    border-radius: 10px;
    border: 1px solid teal;
    background: teal;
    color: white;
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: bold;
    font-size: 16px;
  }

  .about_leftBox button:hover {
    -webkit-transform: translateY(-2px);
    transform: translateY(-2px);
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
  }

  .about_rightBox {
    width: 50%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
  }

  .about_rightBox > div {
    width: 250px;
    height: auto;
    margin: auto;
    border-radius: 100%;
    background-color: white;
    overflow: hidden;
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    height: auto;
    .aboutBox {
      height: 100%;
      flex-direction: column-reverse;
      gap: 0px;
    }

    .about_leftBox > h1 {
      font-size: x-large;
      line-height: 0px;
      text-align: center;
    }

    .about_leftBox > p {
      color: #8492a6;
      font-size: 17px;
      font-weight: 500;
    }

    .about_leftBox {
      width: 60%;
      display: flex;
      align-items: center;
      flex-direction: column;
      text-align: center;
    }

    .about_rightBox {
      width: 100%;
      height: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 15px;
    }

    .about_rightBox > div {
      width: 200px;
      height: auto;
      margin: auto;
      border-radius: 100%;
      background-color: white;
      overflow: hidden;
    }

    .typical {
      //  border:1px solid black;
      width: 180%;
      // margin-top: -1.7rem;
      margin-left: 2.7rem;
      text-transform: small-caps;
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    height: auto;
    .aboutBox {
      height: 100%;
      flex-direction: column-reverse;
    }

    .about_leftBox > h1 {
      font-size: x-large;
      line-height: 0px;
      text-align: center;
    }

    .about_leftBox > p {
      color: #8492a6;
      font-size: 17px;
      font-weight: 500;
    }

    .about_leftBox {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      text-align: center;
    }

    .about_rightBox {
      width: 100%;
      height: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 15px;
    }

    .about_rightBox > div {
      width: 200px;
      height: auto;
    }

    .typical {
      //  border:1px solid black;
      width: 100%;
      // margin-top: -1.7rem;
      margin-left: 2.7rem;
      text-transform: small-caps;
      font-size: 10px;
    }
  }

  @media only screen and (max-width: 320px) {
    height: auto;
    .aboutBox {
      height: 100%;
      flex-direction: column-reverse;
    }

    .about_leftBox > h1 {
      font-size: x-large;
      line-height: 0px;
      text-align: center;
    }

    .about_leftBox > p {
      color: #8492a6;
      font-size: 15px;
      font-weight: 500;
    }

    .about_leftBox {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      text-align: center;
    }

    .about_rightBox {
      width: 100%;
      height: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 15px;
    }

    .about_rightBox > div {
      width: 150px;
      height: auto;
    }
  }

  @media only screen and (max-width: 319px) {
    height: auto;
    .aboutBox {
      height: 100%;
      flex-direction: column-reverse;
    }

    .about_leftBox > h1 {
      font-size: large;
      line-height: 0px;
      text-align: center;
    }

    .about_leftBox > p {
      color: #8492a6;
      font-size: 15px;
      font-weight: 500;
    }

    .about_leftBox {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      text-align: center;
    }

    .about_rightBox {
      width: 100%;
      height: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 15px;
    }

    .about_rightBox > div {
      width: 150px;
      height: auto;
    }
  }
`;
export default About;