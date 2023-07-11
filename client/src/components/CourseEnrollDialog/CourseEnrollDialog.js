import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { FormGroup, IconButton, Typography } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";

const CourseEnrollDialog = ({ courseName, schedule }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        sx={{ marginRight: "1rem" }}
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
          <DialogContent
          // sx={{
          //   "&::after": {
          //     content: '""',
          //     position: "fixed",
          //     top: 0,
          //     left: 0,
          //     right: 0,
          //     bottom: 0,
          //     backdropFilter: "blur(8px)",
          //     zIndex: 999,
          //   },
          // }}
          >
            <Typography variant="body1">Name</Typography>
            <TextField variant="outlined" id="name" sx={{ width: "100%" }} />
            <Typography variant="body1" style={{ marginTop: "0.75rem" }}>
              Email
            </Typography>
            <TextField variant="outlined" id="email" sx={{ width: "100%" }} />
            <Typography variant="body1" style={{ marginTop: "0.75rem" }}>
              Phone
            </Typography>
            <TextField variant="outlined" id="phone" sx={{ width: "100%" }} />
            <Typography variant="body1" style={{ marginTop: "0.75rem" }}>
              Course
            </Typography>
            <TextField
              disabled
              value={courseName}
              variant="outlined"
              defaultValue="Hello World"
              id="course"
              sx={{ width: "100%" }}
            />

            <Typography variant="body1" style={{ marginTop: "0.75rem" }}>
              Schedule
            </Typography>
            <TextField
              variant="outlined"
              id="schedule"
              sx={{ width: "100%" }}
            />
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
                      style={{ position: "relative", paddingLeft: "0.5rem" }}
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
            <Button
              variant="contained"
              sx={{ display: "flex", justifyContent: "center" }}
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
