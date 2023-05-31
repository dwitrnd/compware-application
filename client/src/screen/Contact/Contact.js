import { Box, Typography, TextField, Button } from "@mui/material";

const Contact = () => {
  const handleSubmit = (event) => {};
  const textFieldOutline = "#5A94BD";
  return (
    <>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maxWidth: "85%",
          margin: "0 auto",
          marginTop: 4,
          marginBottom: 4,
          padding: "2rem",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          borderRadius: "0.25rem",
          backgroundColor: "#0F5288",
          color: "white",
        }}
        onSubmit={handleSubmit}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Get In Touch
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{ display: "flex", justifyContent: "center" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur
        </Typography>
        <TextField
          required
          label="Name"
          type="name"
          variant="outlined"
          color="warning"
        />
        <TextField
          required
          label="Email"
          type="email"
          variant="outlined"
          color="warning"
        />
        <TextField
          required
          label="Message"
          multiline
          rows={4}
          variant="outlined"
          color="warning"
        />
        <Button
          variant="contained"
          type="submit"
          sx={{ backgroundColor: "white", color: "#0F5288" }}
        >
          Submit
        </Button>
      </Box>
    </>
  );
};

export default Contact;
