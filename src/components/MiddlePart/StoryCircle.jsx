import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Avatar } from "@mui/material";

const StoryCircle = () => {
  return (
    <div>
      <div className="flex flex-col items-center mr-4 cursor-pointer">
        <Avatar
          src="https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=600"
          sx={{ width: "5rem", height: "5rem" }}
        >
          <AddIcon sx={{ fontSize: "3rem" }} />
        </Avatar>
        <p>social app</p>
      </div>
    </div>
  );
};

export default StoryCircle;
