import * as React from "react";
import Container from "@material-ui/core/Container";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

import Typography from "@mui/material/Typography";

import { makeStyles } from "@material-ui/core/styles";

import TextField from "@mui/material/TextField";
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    marginBottom: theme.spacing(2),
  },
}));

const MemberDialogBox = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div style={{ display: "initial" }}>
      <Button variant="text" disableElevation onClick={handleClickOpen}>
        Request Certificate
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        id="request-certificate-dialog"
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <Typography variant="h4" color="primary">
            Get Your Certificate
          </Typography>
        </DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column" }}>
          <TextField
            required
            label="Name"
            type="name"
            placeholder="Enter your name"
            variant="standard"
          />
          <TextField
            required
            label="Email"
            type="email"
            placeholder="Enter your email"
            variant="standard"
          />
          <TextField
            required
            label="Compware ID"
            type="name"
            placeholder="Enter your ID"
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
          <Button autoFocus onClick={handleClose}>
            Request
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MemberDialogBox;
