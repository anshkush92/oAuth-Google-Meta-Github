// Test -------------------------- Importing the Packages ---------------------------------
import { Card, Box } from "@mui/material";
import CardContextExpansion from "./CardContextExpansion";
import CardMediaImage from "./CardMediaImage";

// Test -------------------------- Importing the styles / other components ----------------
import CardsFooter from "./CardsFooter";
import CardsHeaderChips from "./CardsHeaderChips";

// Test -------------------------- Structure of Props ----------------------------------
type CardsProps = {
  heading: string;
  paragraph: string;
  chips: string[];
  name: string;
  imageUrl: string;
  avatar: string;
};

// Test -------------------------- The current component ----------------------------------
const Cards = ({
  heading,
  paragraph,
  chips,
  name,
  imageUrl,
  avatar,
}: CardsProps) => {
  return (
    <Card
      sx={{
        maxWidth: "300px",
        borderRadius: 2,
      }}
    >
      <Box id="Card-media-images">
        <CardMediaImage imageUrl={imageUrl}></CardMediaImage>
      </Box>

      <Box id="Card-Chips">
        <CardsHeaderChips></CardsHeaderChips>
      </Box>

      <Box id="Card-content-heading-paragraph">
        <CardContextExpansion heading={heading} paragraph={paragraph}></CardContextExpansion>
      </Box>

      <Box id="card-footer-avatar-button">
        <CardsFooter avatar={avatar} name={name}></CardsFooter>
      </Box>
    </Card>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default Cards;
