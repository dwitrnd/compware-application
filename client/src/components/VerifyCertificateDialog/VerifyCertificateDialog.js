import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";
import { Snackbar, Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import Backdrop from "@mui/material/Backdrop";
import { useState } from "react";
import Alert from "@mui/material/Alert";
import { constant } from "constants/contants";
import { useNavigate } from "react-router-dom";

import ForgotValidationID from "components/ForgotValidationID/ForgotValidationID";

const MemberDialogBox = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState({
    errorStatus: false,
    errorMessage: "",
  });

  const fetchData = async () => {
    setIsFetching(true);
    try {
      // post method
      const response = await fetch(`${constant.base}/api/student/check-id`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          verificationId: inputValue,
        }),
      });
      const data = await response.json();
      console.log(data);
      const { status } = data;
      if (status === true && data.msg === "Id exists") {
        // window.href = `${constant.client}/verify-certificate/${inputValue}`;
        setOpen(false);
        navigate(`/verify-certificate/${inputValue}`);
        isFetching(false);
      }

      if (status === false) {
        setError({
          errorStatus: true,
          errorMessage: "Invalid Verification Id.",
        });
        isFetching(false);
      }
    } catch (err) {
      console.log(err);
      setError({
        errorStatus: true,
        errorMessage: "Error occured while verifying id.",
      });
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setError({
      errorStatus: false,
    });
    setOpen(false);
  };

  const handleVerify = () => {
    console.log(inputValue);
    if (inputValue === "") {
      setError({
        errorStatus: true,
        errorMessage: "Enter you Validation ID",
      });
    } else {
      // Fetch data
      fetchData();
    }
  };
  const stopPropagationForTab = (event) => {
    if (event.key === "Tab") {
      event.stopPropagation();
    }
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
        Verify
      </div>
      <Dialog onKeyDown={stopPropagationForTab} onClose={handleClose} aria-labelledby='customized-dialog-title' open={open} id='request-certificate-dialog'>
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
              Certificate Verification
            </Typography>
          </DialogTitle>
          {(() => {
            if (error.errorStatus === true) {
              return (
                <Snackbar open autoHideDuration={4000} style={{ zIndex: 99 }}>
                  <Alert severity='error'>{error.errorMessage}</Alert>
                </Snackbar>
              );
            }
          })()}
          <DialogContent sx={{ display: "flex", flexDirection: "column" }}>
            <Stack spacing={2} marginTop='20px'>
              <Stack direction={{ xs: "column", sm: "row" }} alignItems='center' justifyContent='center' spacing={{ xs: 2, sm: 8 }}>
                <Typography sx={{ marginBottom: "2rem" }}>Validation ID</Typography>
                <Stack direction='column'>
                  <TextField required type='name' variant='outlined' onChange={handleChange} value={inputValue} />
                  <ForgotValidationID />
                </Stack>
              </Stack>
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Close
            </Button>
            <Button onClick={handleVerify}>Verify</Button>
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
