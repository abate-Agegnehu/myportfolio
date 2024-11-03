import React from "react";
import { Container, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(to right, transparent 0%, rgba(10, 200, 150, 0.6) 100%)",
        padding: "16px", // Use 16px as an equivalent for theme.spacing(2)
        textAlign: "center",
      }}
    >
      <Container>
        <Typography variant="h6" sx={{ margin: "8px" }}>
          Follow me on:
          <Link
            href="https://www.linkedin.com/in/abate-agegnehu-a78a84294/"
            target="_blank"
            rel="noopener"
            sx={{ margin: "8px" }}
          >
            LinkedIn
          </Link>{" "}
          |
          <Link
            href="https://github.com/abate-Agegnehu"
            target="_blank"
            rel="noopener"
            sx={{ margin: "8px" }}
          >
            GitHub
          </Link>
        </Typography>
        <Typography variant="body2" sx={{ marginTop: "8px", color: "#6c757d" }}>
          &copy; {new Date().getFullYear()} Abate Agegnehu. Innovating solutions
          through exceptional development.
        </Typography>
      </Container>
    </div>
  );
};

export default Footer;
