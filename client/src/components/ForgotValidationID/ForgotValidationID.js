import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Typography } from "@mui/material";

const ForgotValidationID = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        style={{
          fontSize: "1rem",
          padding: "0.35rem 0.35rem 0.35rem 0.8rem",
          width: "100%",
          cursor: "pointer",
        }}
        variant="text"
        disableElevation
        onClick={handleClickOpen}
      >
        Forgot Password?
      </div>
      <Dialog open={open} onClose={handleClose}>
        <form>
          <DialogTitle>
            <Typography variant="h4" color="primary">
              Forgot ID?
            </Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Complete the form with your details, and we'll be in touch with
              you shortly.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Subscribe</Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default ForgotValidationID;
