// Test -------------------------- Importing the Packages ---------------------------------
import {
  Box,
  Card,
  CardActions,
  CardHeader,
  Typography,
  CardContent,
  TextField,
  Button,
  Grid,
  Divider,
  CardActionArea,
  CardMedia,
  Stack,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
// Test -------------------------- Importing the styles / other components ----------------
import {
  GoogleButton,
  GithubButton,
} from "../../../utilities/different-button";

// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ----------------------------------
const Signup = () => {
  const navigate = useNavigate();

  const facebookAuth = () => {
    window.open("http://localhost:8000/auth/facebook", "_self");
  };

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
      justifyContent="center"
      alignItems="center"
      columnSpacing={8}
      mt={4}
      mb={4}
      position="absolute"
      top="50%"
      left="50%"
      sx={{ transform: "translate(-50%, -50%)" }}
    >
      <Grid item>
        <CardMedia
          component="img"
          src="https://res.cloudinary.com/dicbnntfh/image/upload/v1657720062/signup_ni5ytq.svg"
          alt="Test"
        ></CardMedia>
      </Grid>
      <Grid item>
        <Card sx={{ maxWidth: "400px", m: "auto" }}>
          <CardHeader
            title={<Typography variant="h6">Welcome new user</Typography>}
            subheader="Create a new account to explore more"
            sx={{ textAlign: "left", pb: 0 }}
          ></CardHeader>

          <Grid container spacing={1} justifyContent="space-evenly">
            <Grid item xs={12}>
              <CardContent>
                <Box display="flex" flexDirection="column" gap={1.5}>
                  <TextField label="Username"></TextField>
                  <TextField label="Password"></TextField>
                  <TextField label="Confirm Password"></TextField>
                </Box>
                <CardActions sx={{ pl: 0, pr: 0, mt: 1 }}>
                  <Button fullWidth variant="contained" sx={{ m: 0 }}>
                    Submit
                  </Button>
                </CardActions>

                <CardActionArea
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  <CardHeader
                    subheader="Already have an Account ? Login"
                    sx={{ pt: 0.5, pb: 0.5, textAlign: "center" }}
                  ></CardHeader>
                </CardActionArea>

                <Divider orientation="horizontal" sx={{ mt: 1 }}>
                  OR
                </Divider>
                <Grid
                  container
                  justifyContent="center"
                  columnSpacing={1.5}
                  mt={0.75}
                >
                  <Grid item xs={6}>
                    <GoogleButton
                      onClick={googleAuth}
                      fullWidth
                      variant="contained"
                      sx={{ height: "100%" }}
                    >
                      Google
                    </GoogleButton>
                  </Grid>

                  <Grid item xs={6}>
                    <Stack component="span" spacing={1}>
                      <Grid item>
                        <Button variant="outlined" fullWidth onClick={facebookAuth}>
                          Facebook
                        </Button>
                      </Grid>
                      <Grid item>
                        <GithubButton
                        onClick={githubAuth}
                          variant="outlined"
                          fullWidth
                          sx={{ "&:hover": { backgroundColor: "grey" } }}
                        >
                          Github
                        </GithubButton>
                      </Grid>
                    </Stack>
                  </Grid>
                </Grid>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default Signup;
