import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { FormControl, FormGroup, IconButton, Stack, Typography } from "@mui/material";
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

const initialCheckboxState = false;

const EnrollDialog = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [schedule, setSchedule] = useState("");

  const handleSubmit = () => {
    console.log("name: " + name + " email: " + email + " phone: " + phone + " course: " + course + " schedule: " + schedule);
    // axios
    //   .post("http://localhost:5001/api/enquiry/", {
    //     email: email.toString(),
    //     name: name.toString(),
    //     phoneNum: phone.toString(),
    //     course: course.toString(),
    //     enquiryDate: schedule.toString(),
    //     status: "not done",
    //   })
    //   .then((res) => {
    //     console.log(res);
    //     toast("Wow so easy!");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // use fetch
    fetch("http://localhost:5001/api/enquiry/", {
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
        status: "reviewed",
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
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <>
      <Button variant='outlined' onClick={handleClickOpen} sx={{ marginRight: "1rem" }}>
        Enroll
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth='md'>
        <Stack direction='row'>
          <img src={Image} className='enroll-image' />
          <form>
            <DialogTitle display='flex' justifyContent='space-between' color='primary'>
              Register Now{" "}
              <IconButton
                aria-label='close'
                onClick={handleClose}
                sx={{
                  marginLeft: "auto",
                }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <Typography variant='body1'>Name</Typography>
              <TextField
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
                variant='outlined'
                id='name'
                sx={{ width: "100%" }}
              />
              <Typography variant='body1' style={{ marginTop: "0.75rem" }}>
                Email
              </Typography>
              <TextField
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
                variant='outlined'
                id='email'
                sx={{ width: "100%" }}
              />
              <Typography variant='body1' style={{ marginTop: "0.75rem" }}>
                Phone
              </Typography>
              <TextField
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                required
                variant='outlined'
                id='phone'
                sx={{ width: "100%" }}
              />
              <Typography variant='body1' style={{ marginTop: "0.75rem" }}>
                Course
              </Typography>
              <TextField
                onChange={(e) => {
                  setCourse(e.target.value);
                }}
                required
                variant='outlined'
                id='course'
                sx={{ width: "100%" }}
              ></TextField>
              <Typography variant='body1' style={{ marginTop: "0.75rem" }}>
                Time
              </Typography>
              <FormControl fullWidth>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={time}
                  onChange={(e) => {
                    setTime(e.target.value);
                    setSchedule(e.target.value);
                  }}
                >
                  <MenuItem value='07:00 AM - 09:00AM'>07:00 AM - 09:00AM</MenuItem>
                  <MenuItem value='03:00 PM - 05:00 PM'>03:00 PM - 05:00 PM</MenuItem>
                  <MenuItem value='06:00 PM - 09:00 PM'>06:00 PM - 09:00 PM</MenuItem>
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
                  <FormControlLabel control={<Checkbox style={{ position: "relative", marginRight: "-1rem" }} checked={isChecked} onChange={handleCheckboxChange} />} />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: "0.75rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <span style={{ marginRight: "0.25rem" }}>I agree to</span>
                    <Link to='/terms-and-condition' target='_blank'>
                      <Typography variant='body1' color='primary'>
                        Terms and Conditions
                      </Typography>
                    </Link>
                  </div>
                </div>

                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                  variant='contained'
                  sx={{ display: "flex", justifyContent: "center" }}
                  type='submit'
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
