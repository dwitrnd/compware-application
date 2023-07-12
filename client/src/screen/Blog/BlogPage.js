import React from "react";
import { Container } from "@material-ui/core";
import { Grid, Typography } from "@mui/material";
import BlogImage from "../../assets/images/compware-gallery/compware-gallery-img1.jpg";

const BlogPage = () => {
  return (
    <>
      <Container style={{ marginTop: "3rem", marginBottom: "5rem" }}>
        <Grid container columnSpacing={2}>
          <Grid
            xs={12}
            md={10}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <header>
              <Typography variant="h3" color="primary">
                Blog Page
              </Typography>
              <Typography variant="subtitle1">
                Lorem ipsum dolor sit amet
              </Typography>
            </header>
            <Container
              style={{
                height: "30rem",
                width: "100%",
                backgroundImage: { BlogImage },
              }}
            />
            <Typography variant="subtitle2" gutterBottom>
              -Author Name
            </Typography>
            <p style={{ textAlign: "justify" }}>
              DWIT Software Club, a prominent student-run club of Deerwalk
              Institute of Technology, is thrilled to announce to host a
              Hackathon "DeerHack 2023". This 36-hour-long event is going to
              take place from 5th May 2023 - 7th May 2023 at Deerwalk Complex
              with the primary objective of developing a culture of innovation
              and idea-sharing within the IT industry. This hackathon aims to
              provide a unique opportunity for the participants to collaborate,
              learn and develop innovative solutions to real-world problems and
              promises to be a one-of-a-kind experience, providing a platform to
              showcase their skills and engage with like-minded individuals in a
              competitive environment. DWIT Software Club hopes that DeerHack
              will inspire and motivate the participants to explore new
              technologies, ideas, and their field of interest and push their
              limits to contribute to the growth and development of the IT
              industry in Nepal and beyond. DeerHack 2023 is a platform that
              provides an excellent opportunity to expand the network and
              interact with industry specialists while having access to highly
              skilled mentors which will help the participants to gain valuable
              insights and feedback on their projects. On 10th March, Friday,
              The meeting between the organizers and the volunteers were held
              where the volunteers were assigned task based on their interests
              which includes areas mentioned below: Outreach Design and Social
              Media Technicalities Logistics Event Flow Likewise, the
              participants can choose from four different tracks each with a
              unique focus. The tracks include: Data Science/Machine Learning
              Blockchain Interactive Innovation Open Innovation By offering
              these diverse tracks this hackathon aims to appeal to a wide range
              of participants and encourage them to explore new areas of
              interest and show their creative skills. Join DeerHack for an
              unforgettable experience of learning, collaboration, and
              innovation, and be part of shaping the future of technology.
              Registration can be done via their website.
            </p>
          </Grid>
          <Grid xs={12} md={2}>
            <header>
              <Typography variant="h5" color="primary">
                Recent Post
              </Typography>
            </header>
            <Container style={{ height: "50%" }}>
              <img src={BlogImage} style={{ width: "20%" }} />
            </Container>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default BlogPage;
