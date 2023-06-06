import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Stack,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import { Container } from "@material-ui/core";
const Contact = () => {
  const courses = [
    "Python",
    "JavaScript",
    "Java",
    "C++",
    "C#",
    "Ruby",
    "Swift",
    "Go",
    "PHP",
    "Rust",
    "Kotlin",
    "TypeScript",
    "MATLAB",
    "Perl",
    "Haskell",
  ];
  const handleSubmit = (event) => {};
  return (
    <>
      <Container maxWidth="lg">
        <section style={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h4" gutterBottom>
            Contact Us
          </Typography>{" "}
        </section>
        <section>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: "1", sm: "2", md: "4" }}
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Stack direction={"column"}>
              <LocationOnIcon></LocationOnIcon>
              <Typography variant="h6">Address</Typography>
              <Typography variant="subtitle1">Sifal, Kathmandu</Typography>
            </Stack>
            <Stack direction={"column"}>
              <LocalPhoneIcon></LocalPhoneIcon>
              <Typography variant="h6">Phone</Typography>
              <Typography variant="subtitle1">Sifal, Kathmandu</Typography>
            </Stack>
            <Stack direction={"column"}>
              <EmailIcon></EmailIcon>
              <Typography variant="h6">Email</Typography>
              <Typography variant="subtitle1">Sifal, Kathmandu</Typography>
            </Stack>
          </Stack>
        </section>
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
          <TextField required label="Name" type="name" variant="standard" />
          <TextField required label="Email" type="email" variant="standard" />
          <TextField
            select
            label="Select"
            helperText="Select the course you are interested in"
          >
            {courses.map((course) => {
              return <MenuItem value={course}>{course}</MenuItem>;
            })}
          </TextField>
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
      </Container>
    </>
  );
};

export default Contact;
