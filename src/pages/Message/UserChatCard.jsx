import { MoreHorizOutlined } from "@mui/icons-material";
import { Avatar, Card, CardHeader, IconButton } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const UserChatCard = ({chat}) => {
  const {message,auth}=useSelector(store=>store)
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar
            sx={{
              width: "3.5rem",
              height: "3.5rem",
              fontSize: "1.5rem",
              bgcolor: "#191c29",
              color: "rgb(88,199,250)",
            }}
            src="http://res.cloudinary.com/dj2wdfbxm/image/upload/v1714290667/prkp2cvfihho1bibcvg7.png"
          />
        }
        action={
          <IconButton>
            <MoreHorizOutlined />
          </IconButton>
        }
        title={auth.user.id===chat.users[0].id?chat.users[1].firstName+" "+chat.users[1].lastName:chat.users[0].firstName+" "+chat.users[0].lastName}
        subheader={"@hsjk  osmo"}
      />
    </Card>
  );
};

export default UserChatCard;
