// Test -------------------------- Importing the Packages ---------------------------------
import { CardHeader, Grid, Chip } from "@mui/material";
import { splitString } from "../../../utilities/splitting-strings";

// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- Structure of Props ----------------------------------
type CardsHeaderChipsProps = {
  chips: string;
};

// Test -------------------------- The current component ----------------------------------
const CardsHeaderChips = ({ chips }: CardsHeaderChipsProps) => {
  // My own logic for seperating the strings
  let usingChips = splitString(chips);

  return (
    <CardHeader
      title={
        <Grid container spacing={1}>
          {usingChips.map((chip) => (
            <Grid item key={chip}>
              <Chip
                label={chip}
                variant={`${
                  Math.floor(Math.random() * 10000) % 2 ? "outlined" : "filled"
                }`}
                sx={{
                  color: "black",
                  backgroundColor: `#${Math.floor(
                    Math.random() * 16777215
                  ).toString(16)}`,
                }}
              ></Chip>
            </Grid>
          ))}
        </Grid>
      }
    ></CardHeader>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default CardsHeaderChips;
