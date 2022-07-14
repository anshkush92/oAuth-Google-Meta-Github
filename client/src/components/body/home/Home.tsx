// Test -------------------------- Importing the Packages ---------------------------------
import { Grid, Box } from "@mui/material";

// Test -------------------------- Importing the styles / other components ----------------
import BlogCard from "./BlogCard";

// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ----------------------------------
const Home = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      spacing={2}
      mt={4}
      mb={4}
    >
      <Grid item xs={4}>
        <BlogCard></BlogCard>
      </Grid>

      <Grid item xs={2.5}>
        <Box
          display="flex"
          flexDirection="column"
          gap={2}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <BlogCard removeImage={true}></BlogCard>
          </Grid>
          <Grid item>
            <BlogCard removeImage={true}></BlogCard>
          </Grid>
        </Box>
      </Grid>

      <Grid item xs={2.5}>
        <Box
          display="flex"
          flexDirection="column"
          gap={2}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <BlogCard removeImage={true}></BlogCard>
          </Grid>
          <Grid item>
            <BlogCard removeImage={true}></BlogCard>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default Home;
