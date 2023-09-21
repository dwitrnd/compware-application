import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Typography, Stack } from "@mui/material";
import { useState } from "react";

const ForgotValidationID = () => {
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState({
    errorStatus: false,
    errorMessage: "",
  });

  const fetchData = async () => {
    setIsFetching(true);
    try {
      const response = await fetch("https://example.com/data");
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsFetching(false);
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

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
          width: "fit-content",
          cursor: "pointer",
        }}
        variant="text"
        disableElevation
        onClick={handleClickOpen}
      >
        Forgot ID?
      </div>
      <Dialog open={open} onClose={handleClose}>
        <form>
          <DialogTitle>
            <Typography
              variant="h4"
              color="primary"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              Forgot ID?
            </Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Complete the form with your details, and we'll be in touch with
              you shortly.
            </DialogContentText>
            <Stack spacing={2} marginTop="20px">
              <Stack
                direction={{ xs: "column", sm: "row" }}
                alignItems="center"
                justifyContent="center"
                spacing={{ xs: 2, sm: 8 }}
              >
                <Typography>Email ID</Typography>

                <TextField
                  required
                  type="name"
                  variant="outlined"
                  size="normal"
                  sx={{ width: "50vh" }}
                  onChange={handleChange}
                  value={inputValue}
                />
              </Stack>
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose} type="submit">
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default ForgotValidationID;
