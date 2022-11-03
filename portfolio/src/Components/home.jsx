import { Link, Box } from "@mui/material";
import "./home.css";
import { saveAs } from "file-saver";
export default function Home() {
  const onButtonClick = () => {
    saveAs('https://drive.google.com/u/0/uc?id=1MpM0hx_z1orh_0doTLNW5BoU_FXJ_VIE&export=download')
}
  return (
    <Box
      sx={{
        display: { lg: "flex" },
        boxSizing: "border-box",
        backgroundColor: "#0a192f",
        color: "white",
      }}
    >
      <Box
        sx={{
          width: { lg: "50%", sm: "100%", xs: "100%" },
          display: "flex",
          flexDirection: "column",
          color: "white",
          justifyContent: "center",
          paddingLeft: "50px",
          textAlign: "center",
          margin: "auto",
          boxSizing: "border-box",
        }}
      >
        <h1>Hi There!</h1>
        <h1>
          I'M <span style={{ color: "#cd5ff8" }}>Suman</span>
        </h1>
        <p alignItem="center">
<img src="https://readme-typing-svg.herokuapp.com?&font=IBM+Plex+Sans&color=abcdei&size=22&lines=Problem Solver!;I'm+a+Full-Stack+Web+Developer;I'm+a+Software+Engineer" alt="resume"/>
</p>
        <button data-aos="fade-left"  className="btn"onClick={onButtonClick}>
              <Link
                href="https://drive.google.com/file/d/1MpM0hx_z1orh_0doTLNW5BoU_FXJ_VIE/view"
                target="_blank"
                style={{ textDecoration: "none", color: "white" }}
              >
                Download CV
              </Link>
            </button>
            {/* <a href="../Resume/Nitesh_Sindhu.pdf" download> */}
      </Box>
      <Box sx={{ width: "50%", display: "flex", margin: "auto" }}>
        <img
          src="https://www.ravishukla.me/static/media/home-main.359935c39288e92d4dba5c9f2445b91d.svg"
          style={{ height: "100%", width: "100%" }}
          alt="img"
        />
      </Box>
    </Box>
  );
}