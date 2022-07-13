// Test -------------------------- Importing the Packages ---------------------------------
import { CardContent, Typography, Collapse } from "@mui/material";

// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- Structure of Props ----------------------------------
type CardContextExpansionProps = {
  heading: string;
  paragraph: string;
  isExpanded: boolean;
};

// Test -------------------------- The current component ----------------------------------
const CardContextExpansion = ({
  heading,
  paragraph,
  isExpanded,
}: CardContextExpansionProps) => {
  return (
    <CardContent sx={{ pt: 0 }}>
      <Typography variant="h6" gutterBottom>
        {heading.charAt(0).toUpperCase() + heading.slice(1)}
      </Typography>
      <Typography variant="body2" component="span" m={0}>
        {paragraph.split(".")[0]}{" "}
        <Collapse in={isExpanded} timeout="auto">
          {paragraph.slice(paragraph.indexOf(".") + 1)}
        </Collapse>
      </Typography>
    </CardContent>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default CardContextExpansion;
