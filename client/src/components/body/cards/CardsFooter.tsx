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
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { onClickToggleExpand } from "../../../features/toggleCardExpand/toggleCard";

// Test -------------------------- Structure of Props ----------------------------------
type CardsFooterProps = {
  avatar: string;
  name: string;
};

// Test -------------------------- The current component ----------------------------------
const CardsFooter = ({ avatar, name }: CardsFooterProps) => {
  const isExpanded = useAppSelector((state) => state.toggleCard.isExpanded);
  const dispatch = useAppDispatch();

  const onClickCardButton = () => {
    dispatch(onClickToggleExpand());
  };

  return (
    <Box display="flex" justifyContent="space-between">
      <CardHeader
        avatar={<Avatar src={avatar} alt="Ansh"></Avatar>}
        title={name}
        subheader="12/07/2022"
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
