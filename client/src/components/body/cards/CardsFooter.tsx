// Test -------------------------- Importing the Packages ---------------------------------
import {
  CardHeader,
  Avatar,
  CardActions,
  IconButton,
  Box,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- Structure of Props ----------------------------------
type CardsFooterProps = {
  avatar: string;
  name: string;
  isExpanded: boolean;
  date: string
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
};

// Test -------------------------- The current component ----------------------------------
const CardsFooter = ({
  avatar,
  name,
  isExpanded,
  setIsExpanded,
  date
}: CardsFooterProps) => {
  const onClickCardButton = () => {
    setIsExpanded((previousState) => !previousState);
  };

  return (
    <Box display="flex" justifyContent="space-between">
      <CardHeader
        avatar={<Avatar src={avatar} alt="Ansh"></Avatar>}
        title={name}
        subheader={date}
      ></CardHeader>
      <CardActions>
        <IconButton onClick={onClickCardButton} size="large" color="primary">
          {isExpanded ? (
            <ExpandLessIcon></ExpandLessIcon>
          ) : (
            <ExpandMoreIcon></ExpandMoreIcon>
          )}
        </IconButton>
      </CardActions>
    </Box>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default CardsFooter;
