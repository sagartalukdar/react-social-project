import { Avatar, Card, CardHeader } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchUser } from "../../Redux/Auth/auth.action";
import { createChat } from "../../Redux/Message/message.action";

const SearchUser = () => {

  const dispatch=useDispatch();

  const {message,auth}=useSelector(store=>store);

  const [username, setUsername] = useState("");

  const handleSearchUser = (e) => {
    setUsername(e.target.value);
    dispatch(searchUser(username));
    // alert("search user")
  };
  const handleClick = (id) => {
    // alert("id");
    dispatch(createChat({userId:id}));
  };
  return (
    <div>
      <div className="py-5 relative">
        <input
          className="bg-transparent border border-[#3b4054] outline-none w-full px-5 py-3 rounded-full"
          type="text"
          placeholder="Search User"
          onChange={handleSearchUser}
        />

        {username && 
          auth.searchUser.map((item)=><Card key={item.id} className="absolute w-full z-10 top-[4.5rem] cursor-pointer">
          <CardHeader
            onClick={() => {
              handleClick(item.id);
              setUsername("");
            }}
            avatar={
              <Avatar src="http://res.cloudinary.com/dj2wdfbxm/image/upload/v1714290667/prkp2cvfihho1bibcvg7.png" />
            }
            title={item.firstName+" "+item.lastName}
            subheader={item.firstName.toLowerCase()+" "+item.lastName.toLowerCase()}
          />
        </Card>)
        }
      </div>
    </div>
  );
};

export default SearchUser;
