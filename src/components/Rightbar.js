import {
  Box,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={900}>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Workout Video
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://psd.design/wp-content/uploads/2022/03/Gym-Youtube-Thumbnail-Templates.jpg"
              alt=""
            />
          </ImageListItem>
        </ImageList>


        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Healthy Trends
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
      <img src="https://i.pinimg.com/originals/28/c4/57/28c45758a7c6dbb663e98c072e626732.jpg" alt="tips">Health</img>

      </ListItem>
    </List>
      </Box>
    </Box>
  );
};

export default Rightbar;