import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import { Grid, Typography } from "@mui/material";
import BlogRecommendedImage from "../../assets/images/compware-gallery/compware-gallery-img1.jpg";
import Stack from "@mui/material/Stack";
import BlogImage from "../../assets/images/Blog-Image/blog-image.png";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { constant } from "constants/contants";
import axios from "axios";
import RecentPost from "./components/RecentPost";
import RenderHtmlString from "components/RenderHtmlString/RenderHtmlString";

const BlogPage = () => {
  const { id } = useParams();
  const itemsPerPage = 3;
  const pageNumber = 1;
  const [blogPage, setBlogPage] = useState({
    title: "",
    date: "",
    logo: "",
    article: "",
  });
  const [tableData, setTableData] = useState([]);
  const [allTableData, setAllTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const url = `${constant.base}/api/workshop/${id}`;
  const recentUrl = `${constant.base}/api/workshop`;
  useEffect(() => {
    axios.get(url).then((res) => {
      setBlogPage(res.data.msg);
    });
  });
  useEffect(() => {
    axios.get(recentUrl).then((res) => {
      setAllTableData(res.data.msg);
      setTableData(res.data.msg);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <Container style={{ marginTop: "3rem", marginBottom: "5rem" }}>
        <Grid container columnSpacing={2}>
          <Grid
            xs={12}
            md={8}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <header>
              <Typography variant='h3' color='primary' marginBottom='1rem'>
                {blogPage.title}
              </Typography>
            </header>
            <Container>
              <img src={`${constant.base}/storage/${blogPage.logo}`} width='100%' style={{ borderRadius: "16px" }} />

              
              <p style={{ textAlign: "justify" }}>
                <RenderHtmlString htmlString={blogPage.article} />
              </p>
            </Container>
          </Grid>
          <Grid xs={12} md={4}>
            <Stack direction='column' spacing={2} marginTop='2rem'>
              <Typography variant='h5' color='primary'>
                Recent Post
              </Typography>
              {tableData &&
                tableData
                  .slice((pageNumber - 1) * itemsPerPage, pageNumber * itemsPerPage) // Slice the data for the current page
                  .map((item) => {
                    return (
                      <>
                        <RecentPost id={item._id} title={item.title} date={item.date} author={item.author} image={`${constant.base}/storage/${item.logo}`} article={item.article} />
                      </>
                    );
                  })}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default BlogPage;
