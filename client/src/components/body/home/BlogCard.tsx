// Test -------------------------- Importing the Packages ---------------------------------
import {
  Card,
  CardHeader,
  Avatar,
  Tooltip,
  IconButton,
  CardMedia,
  Typography,
  CardContent,
  Button,
  CardActions,
} from "@mui/material";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- Structure of Props ----------------------------------
type BlogCardProps = {
  height?: string;
  width?: string;
  removeImage?: boolean;
};

// Test -------------------------- The current component ----------------------------------
const BlogCard = ({ width, height, removeImage }: BlogCardProps) => {
  return (
    <Card sx={{ width: { width }, height: { height } }}>
      <CardHeader
        alignItems="center"
        avatar={
          <Avatar
            src="https://mui.com/static/images/avatar/1.jpg"
            alt="Ansh"
            sx={{ height: "56px", width: "56px", mr: 0 }}
          ></Avatar>
        }
        title="Ansh Singh"
        subheader="Software Engineer"
        action={
          <Tooltip title="Click to Read More" arrow>
            <IconButton size="large" sx={{ alignContent: "center" }}>
              <ArrowRightAltIcon></ArrowRightAltIcon>
            </IconButton>
          </Tooltip>
        }
      ></CardHeader>

      {!removeImage && (
        <CardMedia
          component="img"
          height={340}
          src="https://res.cloudinary.com/dicbnntfh/image/upload/v1657793642/oAuth-Google-Meta-Github/night_h2a9mk.jpg"
          alt="Beautiful Blue Night"
        ></CardMedia>
      )}
      <CardContent>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          saepe et sint quasi iure, harum ad expedita vero aliquam tempore.
          Debitis alias eligendi qui quo sapiente atque perferendis tempore
          perspiciatis.
        </Typography>
      </CardContent>
      <CardActions sx={{ p: 2, pt: 0 }}>
        <Button variant="outlined" fullWidth>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default BlogCard;
