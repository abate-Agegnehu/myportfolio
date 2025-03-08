import React from "react";
import { styled } from "@mui/material/styles";
import image from "../images/image.png";


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
        <Image src={image} alt="Abate Agegnehu" />
      </Left>
      <Right>
        <H2>
        MERN: Foundation, Framework, Design, Life.
        </H2>

        <Paragraph>
          In MERN stack development, each technology plays a crucial role, much
          like constructing a house. MongoDB acts as the foundation, storing and
          organizing data efficiently. Express.js builds the backend framework,
          handling server-side logic and API requests. React.js crafts the
          front-end experience, ensuring a dynamic and interactive user
          interface. Node.js powers the system, enabling seamless communication
          between the frontend and backend, bringing the entire application to
          life.
        </Paragraph>
      </Right>
    </Root>
  );
};

export default Home;
