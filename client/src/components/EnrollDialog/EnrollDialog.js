import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {
  FormControl,
  FormGroup,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import Image from "../../assets/images/enroll-image.svg";
import { toast } from "react-toastify";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import Autocomplete from "@mui/material/Autocomplete";
import { constant } from "constants/contants";

const SITE_KEY = "6LczgZknAAAAAH1UXsFrSPEzqNW6HOFS1Bkmv-6N";
const initialCheckboxState = false;

const EnrollDialog = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [schedule, setSchedule] = useState("");
  const [recaptchaValue, setRecaptchaValue] = useState("");
  const [allCourseName, setAllCourseName] = useState([]);
  const [courseNameAndId, setCourseNameAndId] = useState([
    {
      courseName: "",
      courseId: "",
    },
  ]);
  // axios code to fetch all data get method from "/api/course"

  useEffect(() => {
    axios.get(`${constant.base}/api/course`).then((res) => {
      if (res) {
        console.log(
          "res.data============================================================================"
        );
        console.log(res.data);
        const allCourseList = [];
        res.data.msg.map((course) => {
          allCourseList.push(course.courseName);
          setCourseNameAndId((prev) => [
            ...prev,
            {
              courseName: course.courseName,
              courseId: course._id,
            },
          ]);

          setAllCourseName(allCourseList);
        });
      }
    });
  }, []);

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const handleSubmit = () => {
    if (!recaptchaValue) {
      alert("Please complete the reCAPTCHA");
      return;
    }
    console.log(
      "name: " +
        name +
        " email: " +
        email +
        " phone: " +
        phone +
        " course: " +
        course +
        " schedule: " +
        schedule
    );

    // use fetch
    fetch(`${constant.base}/api/enquiry/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.toString(),
        name: name.toString(),
        phoneNum: phone.toString(),
        course: course.toString(),
        enquiryDate: schedule.toString(),
        status: "not approved",
      }),
    })
      .then((res) => {
        console.log(res);
        toast("Submitted successfully!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [open, setOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(initialCheckboxState);
  const [time, setTime] = useState("");

  const handleChange = (event) => {
    setTime(event.target.value);
  };

  const handleCourseChange = (event) => {
    setCourse(event.target.value);
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

  const onChangeCaptcha = (value) => {
    setRecaptchaValue(value);
  };
  return (
    <>
      <Button
        variant="outlined"
        className="roboto_500 "
        onClick={handleClickOpen}
        sx={{ marginRight: "1rem" }}
      >
        Enroll
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <Stack direction="row">
          <img src={Image} className="enroll-image" />
          <form onSubmit={handleSubmit}>
            <DialogTitle
              display="flex"
              justifyContent="space-between"
              color="primary"
            >
              Register Now{" "}
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
                required
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
                required
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
                required
                variant="outlined"
                id="phone"
                sx={{ width: "100%" }}
              />
              <Typography variant="body1" style={{ marginTop: "0.75rem" }}>
                Course
              </Typography>
              <Autocomplete
                id="autocomplete-search"
                options={allCourseName}
                getOptionLabel={(option) => option}
                renderInput={(params) => (
                  <TextField {...params} variant="outlined" />
                )}
                sx={{
                  backgroundColor: "white",
                }}
                onInputChange={(event, value) => {
                  setCourse(value);
                }}
              />
              <Typography variant="body1" style={{ marginTop: "0.75rem" }}>
                Schedule
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
                    flexDirection: "row",
                    alignItems: "center",
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
                      marginTop: "0.75rem",
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
                <FormGroup
                  sx={{ marginTop: "0.75rem", marginBottom: "0.75rem" }}
                >
                  <ReCAPTCHA
                    sitekey={SITE_KEY}
                    onChange={handleRecaptchaChange}
                  />
                </FormGroup>
                <Button
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                  variant="contained"
                  sx={{ display: "flex", justifyContent: "center" }}
                  type="submit"
                  disabled={!isChecked}
                >
                  Register
                </Button>
              </FormGroup>
            </DialogContent>
          </form>
        </Stack>
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

export default EnrollDialog;
