// Test -------------------------- Importing the Packages ---------------------------------
import { CardHeader, Avatar, CardActions, Button, Box } from "@mui/material";

// Test -------------------------- Importing the styles / other components ----------------
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { onClickToggleExpand } from "../../../features/toggleCardExpand/toggleCard";

// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ----------------------------------
const CardsFooter = () => {
  const isExpanded = useAppSelector((state) => state.toggleCard.isExpanded);
  const dispatch = useAppDispatch();

  const onClickCardButton = () => {
    dispatch(onClickToggleExpand());
  };

  return (
    <Box display="flex" justifyContent="space-between">
      <CardHeader
        avatar={
          <Avatar
            src="https://mui.com/static/images/avatar/2.jpg"
            alt="Ansh"
          ></Avatar>
        }
        title="Ansh Singh"
        subheader="12/07/2022"
      ></CardHeader>
      <CardActions>
        <Button onClick={onClickCardButton} variant="outlined">
          {isExpanded ? "Show Less" : "Read More"}
        </Button>
      </CardActions>
    </Box>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default CardsFooter;
