// Test -------------------------- Importing the Packages ---------------------------------
import { CardHeader, Grid, Chip } from "@mui/material";

// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ----------------------------------
const CardsHeaderChips = () => {
  return (
    <CardHeader
      title={
        <Grid container spacing={1}>
          <Grid item>
            <Chip label="Android" color="primary"></Chip>
          </Grid>
          <Grid item>
            <Chip label="Development" color="info"></Chip>
          </Grid>
          <Grid item>
            <Chip
              label="AWS"
              color="default"
              sx={{ backgroundColor: "green", color: "white" }}
            ></Chip>
          </Grid>
          <Grid item>
            <Chip label="Blockchain" variant="outlined" color="warning"></Chip>
          </Grid>
          <Grid item>
            <Chip label="Cloud" variant="outlined" color="error"></Chip>
          </Grid>
          <Grid item>
            <Chip label="Docker" variant="outlined" color="secondary"></Chip>
          </Grid>
        </Grid>
      }
    ></CardHeader>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default CardsHeaderChips;
