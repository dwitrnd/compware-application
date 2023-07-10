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
  const [userDescription, setUserDescription] = React.useState({});

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Learn More
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
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
          <Grid container>
            <Grid
              item
              xs={12}
              sm={4}
              md={2}
              sx={{ display: "flex", direction: "column" }}
            >
              <Container>
                <Avatar src={TrainerPhoto} className={classes.avatar} />
                <Typography variant="body1" color="primary">
                  Teacher's Name
                </Typography>
                <Typography variant="caption">Python Instructor</Typography>{" "}
                <div>
                  <IconButton>
                    <FacebookIcon />
                  </IconButton>
                  <IconButton>
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton>
                    <InstagramIcon />
                  </IconButton>
                </div>
              </Container>
            </Grid>
            <Grid item xs={12} sm={8} md={10}>
              <Typography variant="body1">
                Bachelor's Degree from Ratna Rajyalaxmi Campus (Tribhuvan
                University) in the faculty of humanities and social science, IT
                Apprenticeship program from CTEVT (Deerwalk Institute of
                Technology) and Level-3 Award in Education and Training (RQF)
                from Highfield, UK.
              </Typography>
              <Typography variant="body1">
                He has experience of working at multinational companies like
                Shell as CLP Hub Manager for MENA (Middle East and North
                Africa); Supreme Committee for Delivery and Legacy, (FIFA World
                Cup Qatar 2022™) as HSSE Trainer and Facilitator, and Sifal
                Secondary School as an Admin Analyst.
              </Typography>
              <Typography variant="body1">
                He is also working as a Sales and Marketing Manager at Logispark
                Technologies Pvt. Ltd. He is currently our Training Coordinator
                and Marketing team member at Deerwalk Compware Limited. Yaghya
                is a focused and dedicated person who approaches every task with
                enthusiasm and conviction. He is keen to learn, share and
                motivate those around him.
              </Typography>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MemberDialogBox;
