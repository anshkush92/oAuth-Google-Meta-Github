// Test -------------------------- Importing the Packages ---------------------------------
import { CardMedia } from "@mui/material";

// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- Structure of Props ----------------------------------
type CardMediaImageProps = {
  imageUrl: string;
};

// Test -------------------------- The current component ----------------------------------
const CardMediaImage = ({ imageUrl }: CardMediaImageProps) => {
  return (
    <CardMedia
      height={180}
      component="img"
      image={imageUrl}
      alt="Iguna"
    ></CardMedia>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default CardMediaImage;
