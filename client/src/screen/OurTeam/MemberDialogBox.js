import * as React from "react";
import Container from "@material-ui/core/Container";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import { Avatar } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

import Backdrop from "@mui/material/Backdrop";
import Stack from "@mui/material/Stack";
import RenderHtmlString from "components/RenderHtmlString/RenderHtmlString";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    marginBottom: theme.spacing(2),
  },
}));

const MemberDialogBox = ({ name, post, description, image }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [userDescription, setUserDescription] = React.useState({});

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      style={{
        marginTop: "0.75rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Button variant="outlined" onClick={handleClickOpen}>
        Learn More
      </Button>
      <Dialog
        style={{ maxWidth: "50rem", margin: "0 auto" }}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Grid
            container
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Grid>
              <div>
                <Container
                  className="team-profile"
                  style={{
                    margin: "0 auto",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    sx={{
                      width: "10rem",
                      height: "10rem",
                      border: "4px solid #0f5288",
                    }}
                    src={image}
                    className={classes.avatar}
                  />
                  <Typography variant="body1" color="primary">
                    {name}
                  </Typography>
                  <Typography variant="caption">{post}</Typography>{" "}
                </Container>
              </div>
            </Grid>
            <Grid>
              <div style={{ marginTop: "1rem" }}>
                <Typography variant="body1">
                  <RenderHtmlString htmlString={description} />
                </Typography>
              </div>
            </Grid>
          </Grid>
        </DialogContent>
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
