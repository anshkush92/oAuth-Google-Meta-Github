// Test -------------------------- Importing the Packages ---------------------------------
import { CardMedia } from "@mui/material";

// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ----------------------------------
const CardMediaImage = () => {
  return (
    <CardMedia
      height={180}
      component="img"
      image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
      alt="Iguna"
    ></CardMedia>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default CardMediaImage;
