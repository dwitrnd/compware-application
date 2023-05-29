import { Button, IconButton, InputAdornment } from "@mui/material";
import { Box, TextField } from "@material-ui/core";
import AvatarImage from "../../assets/images/avatar.png";
import EmailIcon from "@mui/icons-material/Email";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import Typography from "@mui/material/Typography";

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "1rem",
          height: "100vh",
          alignItems: "center",
          "& .MuiTextField-root": { width: "20rem" },
        }}
      >
        <div>
          <Avatar
            alt="Deerwalk Logo"
            src={AvatarImage}
            sx={{ width: 76, height: 76 }}
          />
        </div>
        <Typography variant="h4" gutterBottom color="primary">
          Login
        </Typography>
        <div>
          <TextField
            required
            id="standard-basic"
            label="Email"
            variant="filled"
            type="email"
            InputProps={{
              endAdornment: (
                <IconButton>
                  <EmailIcon />
                </IconButton>
              ),
            }}
          />
        </div>
        <div>
          <TextField
            required
            id="standard-basic margin-dense"
            label="Password"
            variant="filled"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <IconButton onClick={handleTogglePassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <Button
          variant="contained"
          type="submit"
          sx={{ width: "20rem", marginTop: "1rem" }}
        >
          Login
        </Button>
      </Box>
    </div>
  );
};

export default AdminLogin;
