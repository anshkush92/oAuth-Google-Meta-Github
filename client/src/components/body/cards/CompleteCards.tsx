// Test -------------------------- Importing the Packages ---------------------------------
import { Grid } from "@mui/material";

// Test -------------------------- Importing the styles / other components ----------------
import Cards from "./Cards";
import { useAppSelector } from "../../../app/hooks";

// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ----------------------------------
const CompleteCards = () => {
  const { chips, heading, paragraph, names, imagesUrl, avatars, dates } = useAppSelector(
    (state) => state.fakeData
  );
  return (
    <Grid container mt={2} mb={2} spacing={3} justifyContent="center">
      {heading?.map((item, index) => (
        <Grid item key={index}>
          <Cards
            heading={heading[index]}
            paragraph={paragraph[index]}
            chips={chips[index]}
            name={names[index]}
            imageUrl={imagesUrl[index]}
            avatar={avatars[index]}
            date={dates[index]}
          ></Cards>
        </Grid>
      ))}
    </Grid>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default CompleteCards;
