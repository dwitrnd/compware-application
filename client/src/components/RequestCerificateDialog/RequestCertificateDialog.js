import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";
import { Snackbar, Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import MuiAlert from "@mui/material/Alert";
import Backdrop from "@mui/material/Backdrop";
import { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { toast } from "react-toastify";
import { constant } from "constants/contants";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const MemberDialogBox = () => {
  const [fullName, setFullName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [courseTrainer, setCourseTrainer] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const [open, setOpen] = useState(false);
  const [snackbarOpen, setsnackbarOpen] = useState(false);

  const currentDate = new Date();
  const nextThreeMonths = new Date(currentDate.getFullYear(), currentDate.getMonth() + 3, currentDate.getDate());
  const formattedStartDate = currentDate.toLocaleDateString("en-GB");
  const formattedEndDate = nextThreeMonths.toLocaleDateString("en-GB");
  const placeholderText = `${formattedStartDate} - ${formattedEndDate}`;
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSnackBarOpen = () => {
    setsnackbarOpen(true);
  };
  const handleSnackBarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setsnackbarOpen(false);
  };

  const handleStartDatePickerChange = (value) => {
    const selectedDate =
      value && value.$d
        ? value.$d.toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "2-digit",
            year: "numeric",
          })
        : null;
    console.log(selectedDate);
    setStartTime(selectedDate);
  };
  const handleEndDatePickerChange = (value) => {
    const selectedDate =
      value && value.$d
        ? value.$d.toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "2-digit",
            year: "numeric",
          })
        : null;
    console.log(selectedDate);
    setEndTime(selectedDate);
  };

  const action = (
    <React.Fragment>
      <Button color='secondary' size='small' onClick={handleSnackBarClose}>
        UNDO
      </Button>
      <IconButton size='small' aria-label='close' color='inherit' onClick={handleSnackBarClose}>
        <CloseIcon fontSize='small' />
      </IconButton>
    </React.Fragment>
  );

  const handleSubmit = () => {
    const data = {
      fullName,
      contactNumber,
      email,
      course,
      courseTrainer,
      startTime,
      endTime,
    };
    console.log(data);

    fetch(constant.base + "/api/request-certificate/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName,
        contactNumber,
        email,
        course,
        courseTrainer,
        startTime,
        endTime,
      }),
    })
      .then((res) => {
        console.log(res);
        toast("Submitted successfully!");
      })
      .catch((err) => {
        console.log(err);
      });

    setOpen(false);
  };

  return (
    <div style={{ display: "initial" }}>
      <div
        style={{
          fontSize: "1rem",
          padding: "0.35rem 0.35rem 0.35rem 0.8rem",
          width: "100%",
        }}
        variant='text'
        disableElevation
        onClick={handleClickOpen}
      >
        Request
      </div>
      <Dialog onClose={handleClose} aria-labelledby='customized-dialog-title' open={open} id='request-certificate-dialog'>
        <form>
          <DialogTitle
            id='customized-dialog-title'
            onClose={handleClose}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography variant='h4' color='primary'>
              Get Your Certificate
            </Typography>
          </DialogTitle>
          <DialogContent sx={{ display: "flex", flexDirection: "column" }}>
            <Stack spacing={2} marginTop='20px' margin='auto'>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 2, sm: 8 }} alignItems='center'>
                <Typography minWidth='8rem'>Full name</Typography>
                <TextField value={fullName} onChange={(e) => setFullName(e.target.value)} required type='name' variant='outlined' size='small' style={{ flex: 1 }} />
              </Stack>
              <Stack direction={{ xs: "column", sm: "row" }} alignItems='center' spacing={{ xs: 2, sm: 8 }}>
                <Typography minWidth='8rem'>Contact Number</Typography>
                <TextField value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} required type='contact' variant='outlined' size='small' style={{ flex: 1 }} />
              </Stack>
              <Stack direction={{ xs: "column", sm: "row" }} alignItems='center' spacing={{ xs: 2, sm: 8 }}>
                <Typography minWidth='8rem'>Email</Typography>
                <TextField value={email} onChange={(e) => setEmail(e.target.value)} required type='email' variant='outlined' size='small' style={{ flex: 1 }} />
              </Stack>
              <Stack direction={{ xs: "column", sm: "row" }} alignItems='center' spacing={{ xs: 2, sm: 8 }}>
                <Typography minWidth='8rem'>Course</Typography>
                <TextField value={course} onChange={(e) => setCourse(e.target.value)} required type='course' variant='outlined' size='small' style={{ flex: 1 }} />
              </Stack>
              <Stack direction={{ xs: "column", sm: "row" }} alignItems='center' spacing={{ xs: 2, sm: 8 }}>
                <Typography minWidth='8rem'>Course Trainer</Typography>
                <TextField value={courseTrainer} onChange={(e) => setCourseTrainer(e.target.value)} required type='courseTrainer' variant='outlined' size='small' style={{ flex: 1 }} />
              </Stack>
              <Stack direction={{ xs: "column", sm: "row" }} alignItems='center' spacing={{ xs: 2, sm: 8 }}>
                <Typography minWidth='8rem'>Start Time </Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs} style={{ flex: 1 }}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker
                      inputProps={{
                        style: { fontSize: "0.8rem", padding: "0.5rem" },
                      }}
                      onChange={handleStartDatePickerChange}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </Stack>
              <Stack direction={{ xs: "column", sm: "row" }} alignItems='center' spacing={{ xs: 2, sm: 8 }}>
                <Typography minWidth='8rem'>End Time</Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker
                      inputProps={{
                        style: { fontSize: "0.8rem", padding: "0.5rem" },
                      }}
                      onChange={handleEndDatePickerChange}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </Stack>
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Close
            </Button>
            <Button
              onClick={() => {
                handleSubmit();
              }}
            >
              Request
            </Button>
            <Snackbar open={snackbarOpen} autoHideDuration={5000} onClose={handleSnackBarClose} message='Request Sent Sucessfully' action={action}>
              <Alert onClose={handleSnackBarClose} severity='success' sx={{ width: "100%" }}>
                Register Request Sent Successfully
              </Alert>
            </Snackbar>
          </DialogActions>
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
    </div>
  );
};

export default MemberDialogBox;
