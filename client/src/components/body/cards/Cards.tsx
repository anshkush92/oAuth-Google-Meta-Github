// Test -------------------------- Importing the Packages ---------------------------------
import { Card, Box } from "@mui/material";
import CardContextExpansion from "./CardContextExpansion";
import CardMediaImage from "./CardMediaImage";

// Test -------------------------- Importing the styles / other components ----------------
import CardsFooter from "./CardsFooter";
import CardsHeaderChips from "./CardsHeaderChips";
import useExpand from "../../../hooks/useExpand";

// Test -------------------------- Structure of Props ----------------------------------
type CardsProps = {
  heading: string;
  paragraph: string;
  chips: string;
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
  const { isExpanded, setIsExpanded } = useExpand();
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
        <CardsHeaderChips chips={chips}></CardsHeaderChips>
      </Box>

      <Box id="Card-content-heading-paragraph">
        <CardContextExpansion
          heading={heading}
          paragraph={paragraph}
          isExpanded={isExpanded}
        ></CardContextExpansion>
      </Box>

      <Box id="card-footer-avatar-button">
        <CardsFooter
          avatar={avatar}
          name={name}
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
        ></CardsFooter>
      </Box>
    </Card>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default Cards;
