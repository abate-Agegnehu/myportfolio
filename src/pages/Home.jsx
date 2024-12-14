import React from "react";
import { styled } from "@mui/material/styles";
import abate2 from "../images/abate2.png";

const Root = styled("div")(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  margin: "-1.1% 0%",
  background:
    "linear-gradient(to right, transparent 60%, rgba(10, 200, 150, 0.6) 100%)",
  position: "relative",
  zIndex: 1,
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    height: "auto",
  },
}));

const Left = styled("div")(({ theme }) => ({
  flex: 1,
  margin: "5% 3% 0% 3%",
  maxWidth: "50%",
  padding: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    maxWidth: "80%",
    margin: "10% 0",
  },
}));

const Right = styled("div")(({ theme }) => ({
  flex: 1,
  margin: "5% 3%",
  maxWidth: "50%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    maxWidth: "80%",
    margin: "10% 0",
  },
}));

const Image = styled("img")({
  width: "100%",
  height: "100%",
  borderRadius: "10px",
});

const H2 = styled("h2")({
  color: "#01A0AA",
  fontSize: "2.5rem",
  fontWeight: "900",
  margin: "2px 0",
  textAlign: "left",
});

const H1 = styled("h1")({
  color: "#007F87",
  fontSize: "3rem",
  fontWeight: "900",
  margin: "2px 0",
  textAlign: "left",
});

const H4 = styled("h4")({
  color: "#000000",
  fontSize: "1.5rem",
  margin: "2px 0",
  fontWeight: "bold",
  textAlign: "left",
});

const Paragraph = styled("p")({
  fontSize: "1.25rem",
  fontWeight: "300",
  lineHeight: "1.6",
  textAlign: "left",
});

const Home = () => {
  return (
    <Root>
      <Left>
        <Image src={abate2} alt="Abate Agegnehu" />
      </Left>
      <Right>
        <H2>Hello It's Me</H2>
        <H1>Abate Agegnehu</H1>
        <H4>And I'm now</H4>
        <Paragraph>
          Software Engineer specializing in Full-Stack Development. Skilled in
          designing and implementing dynamic web applications.
        </Paragraph>
      </Right>
    </Root>
  );
};

export default Home;
