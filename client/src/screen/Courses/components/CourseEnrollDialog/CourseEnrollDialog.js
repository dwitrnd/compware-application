import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { FormControl, FormGroup, IconButton, Typography } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";

import { constant } from "constants/contants";

const initialCheckboxState = false;
const SITE_KEY = "6LczgZknAAAAAH1UXsFrSPEzqNW6HOFS1Bkmv-6N";

const CourseEnrollDialog = ({ courseName }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState(courseName);
  const [schedule, setSchedule] = useState("");
  const [recaptchaValue, setRecaptchaValue] = useState("");
  const [open, setOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(initialCheckboxState);
  const [time, setTime] = useState("");

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const handleChange = (event) => {
    setTime(event.target.value);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!recaptchaValue) {
      alert("Please complete the reCAPTCHA");
      return;
    }

    // use fetch
    // use fetch
    fetch(`${constant.base}/api/enquiry/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.toString(),
        email: email.toString(),
        phoneNum: phone.toString(),
        course: courseName.toString(),
        enquiryDate: schedule.toString(),
        status: "reviewed",
      }),
    })
    .then((res) => res.json())
    .then((data) => {
      setOpen(false);
      toast.success(
        `Thank you for registering for a course. One of our representatives will contact you shortly.\nBest Regards,\nDeerwalk Training Center`
      );
    })
    .catch((err) => {
      console.error(err);
      // Show Toastify error message
      toast.error("An error occurred while submitting the form");
    });
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        sx={{
          marginRight: "1rem",
          display: "flex",
          width: "fit-content",
        }}
      >
        Enroll
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <form>
          <DialogTitle
            display="flex"
            justifyContent="space-between"
            color="primary"
          >
            Register Now
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                marginLeft: "auto",
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <Typography variant="body1">Name</Typography>
            <TextField
              onChange={(e) => {
                setName(e.target.value);
              }}
              variant="outlined"
              id="name"
              sx={{ width: "100%" }}
            />
            <Typography variant="body1" style={{ marginTop: "0.75rem" }}>
              Email
            </Typography>
            <TextField
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              variant="outlined"
              id="email"
              sx={{ width: "100%" }}
            />
            <Typography variant="body1" style={{ marginTop: "0.75rem" }}>
              Phone
            </Typography>
            <TextField
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              variant="outlined"
              id="phone"
              sx={{ width: "100%" }}
            />
            <Typography variant="body1" style={{ marginTop: "0.75rem" }}>
              Course
            </Typography>
            <TextField
              onChange={(e) => {
                setCourse(courseName);
              }}
              disabled
              value={courseName}
              variant="outlined"
              
              id="course"
              sx={{ width: "100%" }}
            />

            <Typography variant="body1" style={{ marginTop: "0.75rem" }}>
              Time
            </Typography>
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={time}
                onChange={(e) => {
                  setTime(e.target.value);
                  setSchedule(e.target.value);
                }}
              >
                <MenuItem value="Morning">Morning</MenuItem>
                <MenuItem value="Afternoon">Afternoon</MenuItem>
                <MenuItem value="Evening">Evening</MenuItem>
              </Select>
            </FormControl>
            <FormGroup>
              <div
                style={{
                  display: "flex",
                  FlexDirection: "row",
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      style={{ position: "relative", marginRight: "-1rem" }}
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                  }
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  <span style={{ marginRight: "0.25rem" }}>I agree to</span>
                  <Link to="/terms-and-condition" target="_blank">
                    <Typography variant="body1" color="primary">
                      Terms and Conditions
                    </Typography>
                  </Link>
                </div>
              </div>
            </FormGroup>
            <FormGroup sx={{ marginTop: "0.75rem", marginBottom: "0.75rem" }}>
              <ReCAPTCHA sitekey={SITE_KEY} onChange={handleRecaptchaChange} />
            </FormGroup>
            <Button
              onClick={(e) => {
                handleSubmit(e);
              }}
              variant="contained"
              sx={{ display: "flex", justifyContent: "center" }}
              type="submit"
              disabled={!isChecked}
            >
              Register
            </Button>
          </DialogContent>
        </form>
      </Dialog>
      <Backdrop
        open={open}
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backdropFilter: "blur(8px)",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
      />
    </>
  );
};

export default CourseEnrollDialog;
