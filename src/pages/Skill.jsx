import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import react from "../images/react.jpg";
import javaScript from "../images/javascript.jpg";
import node from "../images/node.jpg";
import mongodb from "../images/mongodb.jpg";
import springboot from "../images/springboot.jpg";
import java from "../images/java.jpg";
import mysql from "../images/mysql.jpg";
import python from "../images/python.jpg";

// Styled components
const Root = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  background:
    "linear-gradient(to top, transparent 60%, rgba(10, 200, 150, 0.6) 100%)",
  padding: theme.spacing(2),
}));

const SkillContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  margin: "30px 0",
}));

const Skill = styled(Box)(({ theme }) => ({
  margin: "10px",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
  textAlign: "center",
  background: "#f9f9f9",
  flex: "1 1 150px",
  minWidth: "120px",
  transition: "transform 0.2s",
  "&:hover": {
    transform: "scale(1.05)", // Slightly enlarge on hover
  },
}));

const Image = styled("img")({
  width: "80px",
  height: "80px",
});

const Hr = styled("hr")({
  height: "1px",
  background: "#000000",
  width: "10%",
  margin: "0 auto",
});

const Title = styled(Typography)(({ theme }) => ({
  color: "#007F87",
  fontSize: "3rem",
  fontWeight: "bold",
  margin: "40px 0 20px",
  textAlign: "center",
}));

const Percentage = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: 500,
  color: "#007F87",
}));

const SkillComponent = () => {
  const skills = [
    { name: "JavaScript", image: javaScript, percentage: "85%" },
    { name: "React", image: react, percentage: "80%" },
    { name: "Node.js", image: node, percentage: "75%" },
    { name: "MongoDB", image: mongodb, percentage: "70%" },
    { name: "Java", image: java, percentage: "70%" },
    { name: "Spring Boot", image: springboot, percentage: "60%" },
    { name: "MySQL", image: mysql, percentage: "80%" },
    { name: "Python", image: python, percentage: "50%" },
  ];

  return (
    <Root>
      <div>
        <Title>Skills</Title>
        <Hr />
      </div>
      <SkillContainer>
        {skills.map((skill, index) => (
          <Skill key={index}>
            <Image src={skill.image} alt={`${skill.name} logo`} />
            <Typography variant="body1">{skill.name}</Typography>
            <Percentage>{skill.percentage}</Percentage>
          </Skill>
        ))}
      </SkillContainer>
    </Root>
  );
};

export default SkillComponent;
