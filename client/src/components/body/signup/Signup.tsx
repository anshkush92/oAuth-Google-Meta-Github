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
      <Card sx={{ maxWidth: "600px", m: "auto", mt: 4, mb: 4 }}>
        <CardHeader
          title={<Typography variant="h6">Welcome new user</Typography>}
          subheader="New to the Vault? Create an account"
        ></CardHeader>
        <Grid container spacing={0.25} justifyContent="space-evenly">
          <Grid item xs={4}>
            <CardMedia
              component="img"
              src="https://res.cloudinary.com/dicbnntfh/image/upload/v1657720062/signup_ni5ytq.svg"
            ></CardMedia>
          </Grid>
          <Grid item xs={1}>
            <Divider orientation="vertical" sx={{mt: 2, mb: 2}}>OR</Divider>
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
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default Signup;
