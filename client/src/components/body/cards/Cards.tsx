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
} from "@mui/material";

// Test -------------------------- Importing the styles / other components ----------------

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
              <Chip label="Android"></Chip>
            </Grid>
            <Grid item>
              <Chip label="Development"></Chip>
            </Grid>
            <Grid item>
              <Chip label="Blockchain"></Chip>
            </Grid>
            <Grid item>
              <Chip label="Cloud"></Chip>
            </Grid>
            <Grid item>
              <Chip label="Docker"></Chip>
            </Grid>
          </Grid>
        }
      ></CardHeader>

      <CardContent sx={{ pt: 0 }}>
        <Typography variant="h6" gutterBottom>
          Heading
        </Typography>
        <Typography variant="body2" m={0}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
          ducimus quam ipsum esse obcaecati laudantium id blanditiis asperiores
          earum vero, voluptate nulla aspernatur, eius sit architecto adipisci
          fugit maxime quidem.
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
          title="Written By"
          subheader="Ansh Singh"
        ></CardHeader>
        <CardActions>
          <Button>Read More</Button>
        </CardActions>
      </Box>
    </Card>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default Cards;
