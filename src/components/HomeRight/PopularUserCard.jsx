import React from "react";

import { Avatar,CardHeader,Button } from "@mui/material";
import { red } from "@mui/material/colors";

const PopularUserCard = () => {
  return (
    <div>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <Button size="small">
            Follow
          </Button>
        }
        title="Shrimp o Paella"
        subheader=" 14, 2016"
      />
    </div>
  );
};

export default PopularUserCard;
