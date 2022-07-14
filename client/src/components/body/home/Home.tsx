// Test -------------------------- Importing the Packages ---------------------------------
import { Grid, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
// Test -------------------------- Importing the styles / other components ----------------
import BlogCard from "./BlogCard";

// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ----------------------------------
const Home = () => {
  let navigate = useNavigate();

  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={2}
        pt={4}
        pb={4}
        sx={{ backgroundColor: "aliceblue" }}
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
      <Grid
        container
        justifyContent="center"
        sx={{ backgroundColor: "aliceblue" }}
        pb={4}
      >
        <Grid item xs={9} height="100px">
          <Button
            fullWidth
            variant="outlined"
            sx={{ height: "100%" }}
            onClick={() => navigate("/blogs")}
          >
            Explore More Blogs
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default Home;
