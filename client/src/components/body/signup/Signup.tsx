// Test -------------------------- Importing the Packages ---------------------------------
import {
  Box,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  Typography,
  CardContent,
  TextField,
  Button,
  Grid,
  Divider,
} from "@mui/material";

// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ----------------------------------
const Signup = () => {
  return (
    <Box>
      <Card sx={{ maxWidth: "800px", m: "auto", mt: 4, mb: 4 }}>
        <CardHeader
          title={<Typography variant="h6">Welcome new user</Typography>}
          subheader="New to the Vault? Create an account"
          sx={{textAlign: "center"}}
        ></CardHeader>
        <Grid container spacing={1} justifyContent="space-evenly">
          <Grid item xs={5}>
            <CardMedia
              component="img"
              src="https://res.cloudinary.com/dicbnntfh/image/upload/v1657720062/signup_ni5ytq.svg"
            ></CardMedia>
          </Grid>
          <Grid item>
            <Divider orientation="vertical" variant="middle"></Divider>
          </Grid>
          <Grid item xs={6}>
            <CardContent>
              <Box display="flex" flexDirection="column" gap={1}>
                <TextField label="Username"></TextField>
                <TextField label="Password"></TextField>
              </Box>
              <CardActions sx={{ pl: 0, pr: 0, mt: 1 }}>
                <Button fullWidth variant="contained" sx={{ m: 0 }}>
                  Submit
                </Button>
              </CardActions>
              <Divider orientation="horizontal" sx={{ mt: 1 }}>
                OR
              </Divider>
              <Grid container rowSpacing={1.5} columnSpacing={1.5} mt={1}>
                <Grid item xs={12}>
                  <Button variant="contained" fullWidth>
                    Google
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button variant="outlined" fullWidth>
                    Facebook
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button variant="outlined" fullWidth>
                    Github
                  </Button>
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
