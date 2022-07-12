// Test -------------------------- Importing the Packages ---------------------------------
import { CardContent, Typography, Collapse } from "@mui/material";
import { useAppSelector } from "../../../app/hooks";
// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- Structure of Props ----------------------------------
type CardContextExpansionProps = {
  heading: string;
  paragraph: string;
};

// Test -------------------------- The current component ----------------------------------
const CardContextExpansion = ({
  heading,
  paragraph,
}: CardContextExpansionProps) => {
  const isExpanded = useAppSelector((state) => state.toggleCard.isExpanded);

  return (
    <CardContent sx={{ pt: 0 }}>
      <Typography variant="h6" gutterBottom>
        {heading.charAt(0).toUpperCase() + heading.slice(1)}
      </Typography>
      <Typography variant="body2" component="div" m={0}>
        {paragraph.split(".")[0]}
        <Collapse in={isExpanded} timeout="auto">
          {paragraph.slice(paragraph.indexOf("."))}
        </Collapse>
      </Typography>
    </CardContent>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default CardContextExpansion;
