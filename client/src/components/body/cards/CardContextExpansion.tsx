// Test -------------------------- Importing the Packages ---------------------------------
import { CardContent, Typography, Collapse } from "@mui/material";
import { useAppSelector } from "../../../app/hooks";
// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ----------------------------------
const CardContextExpansion = () => {
  const isExpanded = useAppSelector((state) => state.toggleCard.isExpanded);

  return (
    <CardContent sx={{ pt: 0 }}>
      <Typography variant="h6" gutterBottom>
        Heading
      </Typography>
      <Typography variant="body2" component="div" m={0}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        <Collapse in={isExpanded} timeout="auto">
          Maiores ducimus quam ipsum esse obcaecati laudantium id blanditiis
          asperiores earum vero, voluptate nulla aspernatur, eius sit architecto
          adipisci fugit maxime quidem.
        </Collapse>
      </Typography>
    </CardContent>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default CardContextExpansion;
