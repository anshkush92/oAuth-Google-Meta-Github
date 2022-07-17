// Test -------------------------- Importing the Packages ---------------------------------
import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Grid,
  CardMedia,
  Typography,
  TextField,
  Button,
  Divider,
  CardActions,
  Box,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
// Test -------------------------- Importing the styles / other components ----------------
import {
  GoogleButton,
  GithubButton,
} from "../../../utilities/different-button";
// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ----------------------------------
const Login = () => {
  let navigate = useNavigate();

  const facebookAuth = () => {
    window.open("http://localhost:8000/auth/facebook");
  }

  const githubAuth = () => {
    window.open("http://localhost:8000/auth/github", "_self");
  };

  const googleAuth = () => {
    // Open the google Auth window, where google accounts are there to authenticate
    window.open("http://localhost:8000/auth/google", "_self");
  };

  return (
    <Grid
      container
      mt={4}
      mb={4}
      justifyContent="center"
      item
      position="absolute"
      top="50%"
      left="50%"
      sx={{ transform: "translate(-50%, -50%)" }}
    >
      <Grid item>
        <Card sx={{ maxWidth: "400px", m: "auto" }}>
          <CardHeader
            title={<Typography variant="h6">The Vault</Typography>}
            subheader={
              <CardActionArea onClick={() => navigate("/signup")}>
                <Typography variant="body2">
                  Dont Have an Account ? Sign Up
                </Typography>
              </CardActionArea>
            }
          ></CardHeader>
          <CardContent>
            <Box display="flex" flexDirection="column" gap={1.5}>
              <TextField label="Username"></TextField>
              <TextField label="Password"></TextField>
            </Box>
            <CardActions sx={{ pl: 0, pr: 0, mt: 1 }}>
              <Button fullWidth variant="contained" sx={{ m: 0 }}>
                Login
              </Button>
            </CardActions>

            <Divider orientation="horizontal" sx={{ mt: 1 }}>
              OR
            </Divider>
            <Grid container rowSpacing={1.5} columnSpacing={1.5} mt={0.75}>
              <Grid item xs={12}>
                <GoogleButton
                  variant="contained"
                  fullWidth
                  onClick={googleAuth}
                >
                  Google
                </GoogleButton>
              </Grid>
              <Grid item xs={6}>
                <Button variant="outlined" fullWidth onClick={facebookAuth}>
                  Facebook
                </Button>
              </Grid>
              <Grid item xs={6}>
                <GithubButton
                  onClick={githubAuth}
                  variant="outlined"
                  fullWidth
                  sx={{ "&:hover": { backgroundColor: "grey" } }}
                >
                  Github
                </GithubButton>
              </Grid>
            </Grid>
          </CardContent>
          <CardActionArea></CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={5}>
        <CardMedia
          component="img"
          src="https://res.cloudinary.com/dicbnntfh/image/upload/v1657744820/oAuth-Google-Meta-Github/sign-in-try_odw5b0.svg"
          alt="Test"
        ></CardMedia>
      </Grid>
    </Grid>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default Login;
