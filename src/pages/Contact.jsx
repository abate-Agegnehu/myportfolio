import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  TextField,
  Button,
  Typography,
  Container,
  Snackbar,
  SnackbarContent,
  Box,
} from "@mui/material";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_t5mrshk",
        "template_z4ugh4s",
        formData,
        "7f3RtTbPz1kzMs0_X"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setSnackbarMessage("Message sent successfully!");
          setSnackbarOpen(true);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Error sending email:", error.text);
          setSnackbarMessage("Failed to send message. Please try again.");
          setSnackbarOpen(true);
        }
      );
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 4,
        background:
          "linear-gradient(to top, transparent 60%, rgba(10, 200, 150, 0.6) 100%)",
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "#007F87" }}>
        Contact Us
      </Typography>
      <hr
        style={{
          height: "1px",
          background: "#000000",
          width: "15%",
          marginBottom: 3,
        }}
      />
      <form
        onSubmit={handleSubmit}
        style={{ width: "100%", maxWidth: "500px" }}
      >
        <TextField
          label="Name"
          name="name"
          variant="outlined"
          fullWidth
          required
          sx={{ marginBottom: 2 }}
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          label="Email"
          name="email"
          variant="outlined"
          fullWidth
          required
          type="email"
          sx={{ marginBottom: 2 }}
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          label="Message"
          name="message"
          variant="outlined"
          fullWidth
          multiline
          minRows={4}
          required
          sx={{ marginBottom: 2 }}
          value={formData.message}
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            marginTop: 2,
            backgroundColor: "#007F87",
            color: "white",
            "&:hover": {
              backgroundColor: "#005f66",
            },
          }}
        >
          Send Message
        </Button>
      </form>

      <Snackbar
        open={snackbarOpen}
        onClose={handleCloseSnackbar}
        autoHideDuration={4000}
      >
        <SnackbarContent
          sx={{
            backgroundColor: "#01A0AA",
          }}
          message={snackbarMessage}
        />
      </Snackbar>
    </Container>
  );
};

export default Contact;
