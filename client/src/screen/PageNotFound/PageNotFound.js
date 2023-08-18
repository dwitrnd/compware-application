import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ArrowBack from "@mui/icons-material/ArrowBack";
import Typography from "@mui/material/Typography";

export default function Error() {
  return (
    <>
      <section className='page_404'>
        <div className='four_zero_four_bg'></div>
        <Typography variant='h2' align='center'>
          Look like you're lost
        </Typography>
        <Typography variant='subtitle1' color='gray' align='center'>
          The page you are looking for is not avaible!
        </Typography>

        <Box display='flex' justifyContent='center' alignItems='center'>
          <Button
            href='/'
            sx={{
              fontSize: "1.1rem",
              mt: 3,
            }}
            variant='outlined'
            startIcon={<ArrowBack />}
          >
            Go Back
          </Button>
        </Box>
      </section>
    </>
  );
}
