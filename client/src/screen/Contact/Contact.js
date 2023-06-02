import { Box, Typography, TextField, Button } from "@mui/material";

const Contact = () => {
  const handleSubmit = (event) => {};
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
          boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.24)",
          borderRadius: "0.25rem",
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
          variant="standard"
          color="warning"
        />
        <TextField
          required
          label="Email"
          type="email"
          variant="standard"
          color="warning"
        />
        <TextField
          required
          label="Message"
          multiline
          rows={4}
          variant="standard"
          color="warning"
        />
        <Button
          variant="contained"
          type="submit"
          sx={{ backgroundColor: "#0F5288", color: "white" }}
        >
          Submit
        </Button>
      </Box>
    </>
  );
};

export default Contact;
