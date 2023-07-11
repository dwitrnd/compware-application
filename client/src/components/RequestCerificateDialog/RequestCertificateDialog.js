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

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const MemberDialogBox = () => {
  const [open, setOpen] = React.useState(false);
  const [snackbarOpen, setsnackbarOpen] = React.useState(false);

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
  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleSnackBarClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleSnackBarClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div style={{ display: "initial" }}>
      <Button variant="text" disableElevation onClick={handleClickOpen}>
        Request
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        id="request-certificate-dialog"
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4" color="primary">
            Get Your Certificate
          </Typography>
        </DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column" }}>
          <Stack spacing={2} marginTop="20px" alignItems="center" ju>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 2, sm: 8 }}
              alignItems="center"
            >
              <Typography>Full name</Typography>
              <TextField required type="name" variant="outlined" />
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignItems="center"
              spacing={{ xs: 2, sm: 8 }}
            >
              <Typography>Email</Typography>
              <TextField required type="email" variant="outlined" />
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignItems="center"
              spacing={{ xs: 2, sm: 8 }}
            >
              <Typography>Course</Typography>
              <TextField required type="course" variant="outlined" />
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignItems="center"
              spacing={{ xs: 2, sm: 8 }}
            >
              <Typography>Citizenship Card</Typography>
              <TextField required type="citizenshipCard" variant="outlined" />
            </Stack>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleSnackBarOpen}>Request</Button>
          <Snackbar
            open={snackbarOpen}
            autoHideDuration={5000}
            onClose={handleSnackBarClose}
            message="Request Sent Sucessfully"
            action={action}
          >
            <Alert
              onClose={handleSnackBarClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              Register Request Sent Successfully
            </Alert>
          </Snackbar>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MemberDialogBox;
