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
  return (
    <Box>
      <Card sx={{ maxWidth: "400px", m: "auto", mt: 4, mb: 4 }}>
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
              <Grid container rowSpacing={1.5} columnSpacing={1.5} mt={0.75}>
                <Grid item xs={12}>
                  <GoogleButton variant="contained" fullWidth>
                    Google
                  </GoogleButton>
                </Grid>
                <Grid item xs={6}>
                  <Button variant="outlined" fullWidth>
                    Facebook
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <GithubButton
                    variant="outlined"
                    fullWidth
                    sx={{ "&:hover": { backgroundColor: "grey" } }}
                  >
                    Github
                  </GithubButton>
                </Grid>
              </Grid>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default Signup;
