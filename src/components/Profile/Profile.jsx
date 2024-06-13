import { Avatar, Button,Box,Tab,Tabs } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import PostCard from "../MiddlePart/PostCard";
import UserReelCard from "../Reel/UserReelCard";
import ProfileModal from "./ProfileModal";
import { useSelector } from "react-redux";

const Profile = () => {
  const { id } = useParams();
  const {auth}=useSelector(store=>store);

  const [open, setOpen] = React.useState(false);
  const handleOpenProfileModal = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [value, setValue] = React.useState('post');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const tabs=[
    {value:"post" ,name:"post"},
    {value:"reels" ,name:"reels"},
    {value:"saved" ,name:"saved"},
    {value:"repost" ,name:"repost"}
  ]
  const posts=[1,1,1,1,1];
  const reels=[1,1,1,1,1,1];
  const savedPost=[1,1,1,1,1,1];
  return (
    <div className="my-10 w-[70%]">
      <div className="rounded-md">
        <div className="h-[15rem]">
          <img
            className="w-full h-full rounded-t-md"
            src="https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
        <div className="px-5 flex justify-between items-start mt-5 h-[5rem]">
          <Avatar
            className="transform -translate-y-24"
            sx={{ width: "10rem", height: "10rem" }}
            src="https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8fDA%3D"
          />
          {true ? (
            <Button onClick={handleOpenProfileModal} sx={{ borderRadius: "20px" }} variant="outlined">
              Edit Profile
            </Button>
          ) : (
            <Button sx={{ borderRadius: "20px" }} variant="outlined">
              Follow
            </Button>
          )}
        </div>
        <div className="py-5">
          <div className="">
            <h1 className="py-1 font-bold text-xl">{auth.user?.firstName+" "+auth.user?.lastName}</h1>
            <p>@{auth.user?.firstName.toLowerCase()+"-"+auth.user?.lastName.toLowerCase()}</p>
          </div>
          <div className="flex gap-5 items-center py-3">
            <spam>41 Post</spam>
            <spam>5 Followers</spam>
            <spam>0 Followings</spam>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              exercitationem velit excepturi omnis magni minima.
            </p>
          </div>
        </div>

        <section>
          <Box sx={{ width: "100%",borderBottom:1,borderColor:"divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="wrapped label tabs example"
            >
              {tabs.map((tab)=> <Tab value={tab.value} label={tab.name} wrapped/>)}
             
            </Tabs>
          </Box>
          <div className="flex justify-center">
            {value==='post'?<div className="space-y-5 w-[70%] my-10">
              {posts.map((post)=><div className="border border-slate-100">
                <PostCard/>
              </div>  )}
            </div>:value==='reels'?<div className="flex flex-wrap justify-center gap-2 my-10">
                {reels.map((reel)=><UserReelCard/>)}
            </div>:value==='saved'?<div className="space-y-5 w-[70%] my-10">
              {savedPost.map((savedPost)=><div className="border border-slate-100">
                <PostCard/>
              </div>  )}
            </div>: <div>repost</div> }
          </div>
        </section>
      </div>

     <section>
      <ProfileModal open={open} handleClose={handleClose} handleOpenProfileModal={handleOpenProfileModal} />
     </section>

    </div>
  );
};

export default Profile;
