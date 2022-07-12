// Test -------------------------- Importing the Packages ---------------------------------
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
  Avatar,
  CardHeader,
  Box,
  Chip,
  Grid,
  Collapse,
} from "@mui/material";

// Test -------------------------- Importing the styles / other components ----------------
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { onClickToggleExpand } from "../../../features/toggleCardExpand/toggleCard";

// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ----------------------------------
const Cards = () => {
  const isExpanded = useAppSelector((state) => state.toggleCard.isExpanded);
  const dispatch = useAppDispatch();

  const onClickCardButton = () => {
    dispatch(onClickToggleExpand());
  };

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
      <CardMedia
        height={160}
        component="img"
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        alt="Iguna"
      ></CardMedia>
      <CardHeader
        title={
          <Grid container spacing={1}>
            <Grid item>
              <Chip label="Android" color="primary"></Chip>
            </Grid>
            <Grid item>
              <Chip label="Development" color="info"></Chip>
            </Grid>
            <Grid item>
              <Chip
                label="AWS"
                color="default"
                sx={{ backgroundColor: "green", color: "white" }}
              ></Chip>
            </Grid>
            <Grid item>
              <Chip
                label="Blockchain"
                variant="outlined"
                color="warning"
              ></Chip>
            </Grid>
            <Grid item>
              <Chip label="Cloud" variant="outlined" color="error"></Chip>
            </Grid>
            <Grid item>
              <Chip label="Docker" variant="outlined" color="secondary"></Chip>
            </Grid>
          </Grid>
        }
      ></CardHeader>

      <CardContent sx={{ pt: 0 }}>
        <Typography variant="h6" gutterBottom>
          Heading
        </Typography>
        <Typography variant="body2" m={0}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          <Collapse in={isExpanded} timeout="auto">
            Maiores ducimus quam ipsum esse obcaecati laudantium id blanditiis
            asperiores earum vero, voluptate nulla aspernatur, eius sit
            architecto adipisci fugit maxime quidem.
          </Collapse>
        </Typography>
      </CardContent>
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
    </Card>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default Cards;
