import { React, useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import { constant } from "constants/contants";
import ClipLoader from "react-spinners/ClipLoader";
import Pagination from "@mui/material/Pagination";
import { Container, Typography, Grid, Button } from "@material-ui/core";

export default function App() {
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "#0f5288",
    };
    const [isLoading, setIsLoading] = useState(true);
    const itemsPerPage = 5;
    const [pageNumber, setPageNumber] = useState(1);
    const [tableData, setTableData] = useState([]);
    const [category, setCategory] = useState([]);
    const [allTableData, setAllTableData] = useState([]);
    const url = `${constant.base}/api/gallery`;

    useEffect(() => {
        setIsLoading(true);
        axios.get(url)
            .then((res) => {
                console.log(res.data.msg);
                setAllTableData(res.data.msg);
                setCategory(res.data.msg);
                console.log(category)
                setTableData(res.data.msg);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const handlePageChange = (event, page) => {
        // `page` contains the current page number
        console.log("Current page:", page);
        setPageNumber(page);
    };
    if (isLoading) {
        return (
            <div
                style={{
                    paddingTop: "10rem",
                    marginLeft: "50%",
                    transform: "translateX(-50%)",
                }}
            >
                <ClipLoader
                    cssOverride={override}
                    color={"red"}
                    loading={true}
                    size={90}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
        );
    }
    return (
        <main>
            <Container style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "md",
          marginTop: "3rem",
          marginBottom: "3rem",
        }}>
            <header
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h3" color="primary">
            Gallery
          </Typography>
        </header>
        <Grid container spacing={3}>
          {category.slice(0, itemsPerPage).map((category) => (
            <Grid item xs={12} md={4} key={category._id}>
              <Link to={`/gallery/${category._id}`} style={{ textDecoration: 'none', color: 'inherit' }} key={category._id}>
                <img
                  src={`${constant.base}/storage/${category.images[0]}`}
                  alt={category.galleryCategoryName}
                  width="full"
                  height="300px"
                  style={{ height: "300px", width: "100%", objectFit: "cover", marginBottom: "1rem", marginTop:"1rem" }}
                />
                <Typography
                  color="primary"
                  component="h3"
                >
                  {category.galleryCategoryName}
                </Typography>
              </Link>
            </Grid>
          ))}
        </Grid>
                <Pagination
                    onChange={handlePageChange}
                    count={Math.ceil(tableData.length / itemsPerPage)}
                    color="primary"
                    shape="rounded"
                    style={{ marginTop: "3rem" }}
                />
            </Container>
        </main>
    );
}