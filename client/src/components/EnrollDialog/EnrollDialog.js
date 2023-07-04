import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Typography } from "@mui/material";

const EnrollDialog = () => {
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
        variant="outlined"
        onClick={handleClickOpen}
        sx={{ marginRight: "1rem" }}
      >
        Enroll
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <form>
          <DialogTitle>Register Now</DialogTitle>
          <DialogContent>
            <Typography variant="body1">Name</Typography>
            <TextField variant="outlined" id="name" />
            <Typography variant="body1">Email</Typography>
            <TextField variant="outlined" id="email" />
            <Typography variant="body1">Phone</Typography>
            <TextField variant="outlined" id="phone" />
            <Typography variant="body1">Course</Typography>
            <TextField variant="outlined" id="course" />
            <Typography variant="body1">Schedule</Typography>
            <TextField variant="outlined" id="schedule" />
          </DialogContent>
        </form>
      </Dialog>
    </>
  );
};

export default EnrollDialog;
