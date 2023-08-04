import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { FormGroup, IconButton, Stack, Typography } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import Image from "../../assets/images/enroll-image.svg";
import axios from "axios";

const initialCheckboxState = false;

const EnrollDialog = ({}) => {
  const [open, setOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(initialCheckboxState);
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
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        sx={{ marginRight: "1rem" }}
      >
        Enroll
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <Stack direction="row">
          <img src={Image} className="enroll-image" />
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
            <DialogContent>
              <Typography variant="body1">Name</Typography>
              <TextField
                required
                variant="outlined"
                id="name"
                sx={{ width: "100%" }}
              />
              <Typography variant="body1" style={{ marginTop: "0.75rem" }}>
                Email
              </Typography>
              <TextField
                required
                variant="outlined"
                id="email"
                sx={{ width: "100%" }}
              />
              <Typography variant="body1" style={{ marginTop: "0.75rem" }}>
                Phone
              </Typography>
              <TextField
                required
                variant="outlined"
                id="phone"
                sx={{ width: "100%" }}
              />
              <Typography variant="body1" style={{ marginTop: "0.75rem" }}>
                Course
              </Typography>
              <TextField
                required
                variant="outlined"
                id="course"
                sx={{ width: "100%" }}
              ></TextField>
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
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        style={{ position: "relative", marginRight: "0.25rem" }}
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

                <Button
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
