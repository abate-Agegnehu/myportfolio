import React from "react";
import { Box, Typography } from "@mui/material";
import abate1 from "../images/abate1.png";

const About = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(to left, transparent 60%, rgba(10, 200, 150, 0.6) 100%)",
        height: "100vh",
        position: "relative",
        zIndex: 1,
        flexDirection: { xs: "column", sm: "row" }, // responsive layout
      }}
    >
      <Box
        sx={{
          flex: 1,
          margin: { xs: "10% 0", sm: "5% 3%" },
          maxWidth: { xs: "80%", sm: "50%" },
          padding: 2, // equivalent to theme.spacing(2)
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: "#007F87",
            fontSize: "3rem",
            fontWeight: "bold",
            margin: "10px 0",
            textAlign: "center",
          }}
        >
          About Me
        </Typography>
        <hr
          style={{
            height: "1px",
            background: "#000000",
            width: "60%",
            margin: "10px auto",
          }}
        />
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.25rem",
            fontWeight: "300",
            lineHeight: "1.6",
            textAlign: "justify",
          }}
        >
          Hello! I’m Abate Agegnehu, a dedicated Software Engineer specializing
          in full-stack development. I have a strong foundation in JavaScript,
          React, Node.js, Java, Spring Boot, MongoDB, and MySQL, with skills
          spanning both frontend and backend. I’m passionate about building
          seamless, user-friendly applications that showcase technical
          excellence. I thrive in collaborative environments, where I learn from
          others and contribute my knowledge. My goal is to create impactful
          solutions that address real-world challenges. Driven to keep growing,
          I’m excited to build innovative software that makes a positive
          difference.
        </Typography>
      </Box>
      <Box
        sx={{
          flex: 1,
          margin: { xs: "10% 0", sm: "5% 3%" },
          maxWidth: { xs: "80%", sm: "50%" },
          padding: 2, // equivalent to theme.spacing(2)
        }}
      >
        <img
          src={abate1}
          alt="Abate Agegnehu"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "10px",
          }}
        />
      </Box>
    </Box>
  );
};

export default About;
