import React from "react";
import { Box, Typography } from "@mui/material";
import abate2 from "../images/abate2.png";

const Home = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        background:
          "linear-gradient(to right, transparent 60%, rgba(10, 200, 150, 0.6) 100%)",
        position: "relative",
        zIndex: 1,
        flexDirection: { xs: "column", sm: "row" },
        height: "auto",
      }}
    >
      <Box
        sx={{
          flex: 1,
          margin: { xs: "10% 0", sm: "5% 3%" },
          maxWidth: { xs: "80%", sm: "50%" },
          padding: 2,
        }}
      >
        <img
          src={abate2}
          alt="Abate Agegnehu"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "10px",
          }}
        />
      </Box>
      <Box
        sx={{
          flex: 1,
          margin: { xs: "10% 0", sm: "5% 3%" },
          maxWidth: { xs: "80%", sm: "50%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 2,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "#01A0AA",
            fontSize: "2.5rem",
            fontWeight: "900",
            margin: "2px 0",
            textAlign: "left",
          }}
        >
          Hello It's Me
        </Typography>
        <Typography
          variant="h1"
          sx={{
            color: "#007F87",
            fontSize: "3rem",
            fontWeight: "900",
            margin: "2px 0",
            textAlign: "left",
          }}
        >
          Abate Agegnehu
        </Typography>
        <Typography
          variant="h4"
          sx={{
            color: "#000000",
            fontSize: "1.5rem",
            margin: "2px 0",
            fontWeight: "bold",
            textAlign: "left",
          }}
        >
          And I'm now
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.25rem",
            fontWeight: "300",
            lineHeight: "1.6",
            textAlign: "left",
          }}
        >
          Currently a 4th-year Software Engineering student at Wolkite
          University, Full-Stack developer
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
