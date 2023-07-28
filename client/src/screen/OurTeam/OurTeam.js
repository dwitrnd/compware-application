// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Container from "@material-ui/core/Container";
// import Grid from "@material-ui/core/Grid";
// import Box from "@material-ui/core/Box";
// import Typography from "@material-ui/core/Typography";
// import Avatar from "@material-ui/core/Avatar";
// import MemberDialogBox from "./MemberDialogBox";

// import ContactForm from "../../components/ContactForm";

// const useStyles = makeStyles((theme) => ({
//   avatar: {
//     width: theme.spacing(12),
//     height: theme.spacing(12),
//     marginLeft: "auto",
//     marginRight: "auto",
//     marginBottom: theme.spacing(2),
//   },
// }));

// export default function OurTeam(props) {
//   const classes = useStyles();

//   const content = {
//     badge: "Our Team",
//     "header-p1": "Meet Our",
//     "header-p2": "Team",
//     description: "We're a team of experienced folks",
//     "01_image": "https://deerwalkcompware.com/training/uploads/team/pravin.jpg",
//     "01_name": "Danny Bailey",
//     "01_job": "CEO & Founder",

//     "02_image": "https://deerwalkcompware.com/training/uploads/team/Swajal.jpg",
//     "02_name": "Alice Bradley",
//     "02_job": "Head of Operations",

//     "03_image":
//       "https://deerwalkcompware.com/training/uploads/team/Yaghya%20Lamsal.png",
//     "03_name": "Ian Brown",
//     "03_job": "Head of Development",

//     "04_image":
//       "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd91&w=256&ah=256&q=80",
//     "04_name": "Daisy Carter",
//     "04_job": "Sales Director",

//     "05_image":
//       "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd91&w=256&ah=256&q=80",
//     "05_name": "Danny Bailey",
//     "05_job": "CEO & Founder",

//     "06_image":
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&w=256&ah=256&q=80",
//     "06_name": "Alice Bradley",
//     "06_job": "Head of Operations",

//     "07_image":
//       "https://images.unsplash.com/photo-1560298803-1d998f6b5249?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd91&w=256&ah=256&q=80",
//     "07_name": "Ian Brown",
//     "07_job": "Head of Development",

//     "08_image":
//       "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd91&w=256&ah=256&q=80",
//     "08_name": "Daisy Carter",
//     "08_job": "Sales Director",
//     ...props.content,
//   };

//   return (
//     <section
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Container maxWidth="lg">
//         <Box pt={5} pb={10} textAlign="center">
//           <Box mb={9}>
//             <Container maxWidth="sm">
//               <Typography variant="overline" color="textSecondary">
//                 {content["badge"]}
//               </Typography>
//               <Typography variant="h3" component="h2" gutterBottom={true}>
//                 <Typography
//                   variant="h3"
//                   component="span"
//                   className="gradient-text"
//                 >
//                   {content["header-p1"]}{" "}
//                 </Typography>
//                 <Typography variant="h3" component="span">
//                   {content["header-p2"]}
//                 </Typography>
//               </Typography>
//               <Typography
//                 variant="subtitle1"
//                 color="textSecondary"
//                 paragraph={true}
//               >
//                 {content["description"]}
//               </Typography>
//             </Container>
//           </Box>
//           <Grid container spacing={6}>
//             <Grid item xs={12} sm={6} md={3}>
//               <Avatar
//                 alt=""
//                 src={content["01_image"]}
//                 className={classes.avatar}
//               />
//               <Typography
//                 className="blue-color"
//                 variant="h6"
//                 component="h6"
//                 gutterBottom={true}
//               >
//                 {content["01_name"]}
//               </Typography>
//               <Typography
//                 variant="body1"
//                 color="textSecondary"
//                 component="span"
//               >
//                 {content["01_job"]}
//               </Typography>
//             </Grid>
//             <Grid item xs={12} sm={6} md={3}>
//               <Avatar
//                 alt=""
//                 src={content["02_image"]}
//                 className={classes.avatar}
//               />
//               <Typography
//                 className="blue-color"
//                 variant="h6"
//                 component="h6"
//                 gutterBottom={true}
//               >
//                 {content["02_name"]}
//               </Typography>
//               <Typography
//                 variant="body1"
//                 color="textSecondary"
//                 component="span"
//               >
//                 {content["02_job"]}
//               </Typography>
//             </Grid>
//             <Grid item xs={12} sm={6} md={3}>
//               <Avatar
//                 alt=""
//                 src={content["03_image"]}
//                 className={classes.avatar}
//               />
//               <Typography
//                 className="blue-color"
//                 variant="h6"
//                 component="h6"
//                 gutterBottom={true}
//               >
//                 {content["03_name"]}
//               </Typography>
//               <Typography
//                 variant="body1"
//                 color="textSecondary"
//                 component="span"
//               >
//                 {content["03_job"]}
//               </Typography>
//             </Grid>
//             <Grid item xs={12} sm={6} md={3}>
//               <Avatar
//                 alt=""
//                 src={content["04_image"]}
//                 className={classes.avatar}
//               />
//               <Typography
//                 className="blue-color"
//                 variant="h6"
//                 component="h6"
//                 gutterBottom={true}
//               >
//                 {content["04_name"]}
//               </Typography>
//               <Typography
//                 variant="body1"
//                 color="textSecondary"
//                 component="span"
//               >
//                 {content["04_job"]}
//               </Typography>
//             </Grid>
//             <Grid item xs={12} sm={6} md={3}>
//               <Avatar
//                 alt=""
//                 src={content["05_image"]}
//                 className={classes.avatar}
//               />
//               <Typography
//                 className="blue-color"
//                 variant="h6"
//                 component="h6"
//                 gutterBottom={true}
//               >
//                 {content["05_name"]}
//               </Typography>
//               <Typography
//                 variant="body1"
//                 color="textSecondary"
//                 component="span"
//               >
//                 {content["05_job"]}
//               </Typography>
//             </Grid>
//             <Grid item xs={12} sm={6} md={3}>
//               <Avatar
//                 alt=""
//                 src={content["06_image"]}
//                 className={classes.avatar}
//               />
//               <Typography
//                 className="blue-color"
//                 variant="h6"
//                 component="h6"
//                 gutterBottom={true}
//               >
//                 {content["06_name"]}
//               </Typography>
//               <Typography
//                 variant="body1"
//                 color="textSecondary"
//                 component="span"
//               >
//                 {content["06_job"]}
//               </Typography>
//             </Grid>
//             <Grid item xs={12} sm={6} md={3}>
//               <Avatar
//                 alt=""
//                 src={content["07_image"]}
//                 className={classes.avatar}
//               />
//               <Typography
//                 className="blue-color"
//                 variant="h6"
//                 component="h6"
//                 gutterBottom={true}
//               >
//                 {content["07_name"]}
//               </Typography>
//               <Typography
//                 variant="body1"
//                 color="textSecondary"
//                 component="span"
//               >
//                 {content["07_job"]}
//               </Typography>
//             </Grid>
//             <Grid item xs={12} sm={6} md={3}>
//               <Avatar
//                 alt=""
//                 src={content["08_image"]}
//                 className={classes.avatar}
//               />
//               <Typography
//                 className="blue-color"
//                 variant="h6"
//                 component="h6"
//                 gutterBottom={true}
//               >
//                 {content["08_name"]}
//               </Typography>
//               <Typography
//                 variant="body1"
//                 color="textSecondary"
//                 component="span"
//               >
//                 {content["08_job"]}
//               </Typography>
//               <MemberDialogBox />
//             </Grid>
//           </Grid>
//         </Box>
//       </Container>

//       <ContactForm />
//     </section>
//   );
// }
import { Container } from "@material-ui/core";
import React from "react";
import Pravin from "../../assets/images/OurTeam/Praveen-Dai.jpg";
import { Typography } from "@mui/material";
import OurTeamLayout from "./OurTeamLayout";
import CompwareTeacher from "./CompwareTeacher";
const OurTeam = () => {
  return (
    <>
      <Container style={{ marginTop: "3rem" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h3" color="primary">
            Meet the Team
          </Typography>
        </div>
        <div>
          <OurTeamLayout
            title="Our Team"
            datas={[
              {
                name: "Pravin Thapalia",
                role: "Training Manager",
                image: "https://i.imgur.com/i8bIRhm.jpg",
              },
              {
                name: "Yagya Lamsal",
                role: "Teacher",
                image: "https://i.imgur.com/i8bIRhm.jpg",
              },
              {
                name: "Ranjan K.C",
                role: "Training Manager",
                image: "https://i.imgur.com/i8bIRhm.jpg",
              },
            ]}
          />
        </div>
      </Container>
    </>
  );
};

export default OurTeam;
