// Test -------------------------- Importing the Packages ---------------------------------
import { Card, Box } from "@mui/material";
import CardContextExpansion from "./CardContextExpansion";
import CardMediaImage from "./CardMediaImage";

// Test -------------------------- Importing the styles / other components ----------------

import CardsFooter from "./CardsFooter";
import CardsHeaderChips from "./CardsHeaderChips";

// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ----------------------------------
const Cards = () => {
  return (
    <Card
      sx={{
        maxWidth: "400px",
        mt: 2,
        mb: 2,
        ml: "auto",
        mr: "auto",
        borderRadius: 2,
      }}
    >
      <Box id="Card-media-images">
        <CardMediaImage></CardMediaImage>
      </Box>

      <Box id="Card-Chips">
        <CardsHeaderChips></CardsHeaderChips>
      </Box>

      <Box id="Card-content-heading-paragraph">
        <CardContextExpansion></CardContextExpansion>
      </Box>

      <Box id="card-footer-avatar-button">
        <CardsFooter></CardsFooter>
      </Box>
    </Card>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default Cards;
