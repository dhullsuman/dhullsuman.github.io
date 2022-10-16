import { Avatar ,Box} from "@mui/material";

export default function About() {
  return (
    <Box sx={{ backgroundColor: "#191327", color: "white" }}>
      <h1 style={{ textAlign: "center" }}>About</h1>
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "50%",
            paddingLeft: "50px",
            fontSize: "20px",
            fontWeight: "bold",
            boxSizing: "border-box",
          }}
        >
          <p>
            Hello stranger! 👋, my name is{" "}
            <span style={{ color: "#cd5ff8" }}>Suman</span> and I am a
            Full Stack Developer, passionate about building digital products
            that improve everyday experience for people.
          </p>
          <p>
            I am Quick learner and an aspiring full-stack web developer with
            core knowledge of MERN stack technology. Looking forward to applying
            and enhancing my skills and knowledge as a developer.
          </p>
        </div>
        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Avatar
            src="./img1.png"
            alt="Suman"
            sx={{ width: "50%", height: "70%" }}
          />
        </div>
      </div>
    </Box>
  );
}