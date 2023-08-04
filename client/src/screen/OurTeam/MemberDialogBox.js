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
import TrainerPhoto from "../../assets/images/our-team/trainerphoto.jpeg";
import { Avatar } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Backdrop from "@mui/material/Backdrop";

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
      <Button variant='outlined' onClick={handleClickOpen}>
        Learn More
      </Button>
      <Dialog style={{ maxWidth: "50rem", margin: "0 auto" }} onClose={handleClose} aria-labelledby='customized-dialog-title' open={open} maxWidth='sm' fullWidth>
        <DialogTitle id='customized-dialog-title' onClose={handleClose} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Grid container>
            <div style={{ margin: "0 auto" }}>
              <Container className='team-profile'>
                <Avatar sx={{ width: "10rem", height: "10rem" }} src={image} className={classes.avatar} />
                <Typography variant='body1' color='primary'>
                  {name}
                </Typography>
                <Typography variant='caption'>{post}</Typography>{" "}
              </Container>
            </div>
            <div style={{ marginTop: "1rem" }}>
              <Typography variant='body1'>{description}</Typography>
            </div>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
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
