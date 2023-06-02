import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import { Button } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const DropDown = () => {
  const dropDownToggle = <DropDown />;
  const courses = ["Programming", "UI", "Marketing", "GIS", "Cyber Security"];
  return (
    <>
      <Box>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          sx={{ padding: "2rem" }}
        >
          {courses.map((course) => {
            return (
              <Grid item xs={2} key={course}>
                <Item>{course}</Item>
              </Grid>
            );
          })}
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            paddingBottom: "1rem", // Add some padding at the bottom
          }}
        >
          <Button>See All Courses</Button>
        </Box>
      </Box>
    </>
  );
};

export default DropDown;
