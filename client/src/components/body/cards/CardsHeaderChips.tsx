// Test -------------------------- Importing the Packages ---------------------------------
import { CardHeader, Grid, Chip } from "@mui/material";
import { colorsChip } from "../../../types/colors.type";

// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- Structure of Props ----------------------------------
type CardsHeaderChipsProps = {
  chips: string;
};

// Test -------------------------- The current component ----------------------------------
const CardsHeaderChips = ({ chips }: CardsHeaderChipsProps) => {
  console.log(chips);
  let usingChips: string[] = [];

  // My own logic for seperating the strings
  let start = 0;
  for (let i = 0; i < chips.length; i++) {
    if (chips[i] === " ") {
      usingChips.push(chips.substring(start, i));
      start = i + 1;
    } else if (i === chips.length - 1) {
      usingChips.push(chips.substring(start, i + 1));
    }
  }

  console.log(usingChips);

  const colors = [
    "primary",
    "secondary",
    "info",
    "default",
    "error",
    "success",
    "warning",
  ];
  const variant = ["outlined", "filled"];

  return (
    <CardHeader
      title={
        <Grid container spacing={1}>
          {usingChips.map((chip) => (
            <Grid item>
              <Chip label={chip}></Chip>
            </Grid>
          ))}
        </Grid>
      }
    ></CardHeader>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default CardsHeaderChips;
