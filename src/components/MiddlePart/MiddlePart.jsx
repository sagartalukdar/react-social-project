import { Avatar, Card, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import StoryCircle from "./StoryCircle";
import ImageIcon from '@mui/icons-material/Image';
import VideoChatIcon from '@mui/icons-material/VideoChat';
import ArticleIcon from '@mui/icons-material/Article';
import PostCard from "./PostCard";
import CreatePostModal from "../CreatePost/CreatePostModal";
import { useDispatch, useSelector } from "react-redux";
import { getAllPostAction } from "../../Redux/Post/post.action";

const story=[1,21,1,1];
const posts=[1,1,154,5,5,4];

const MiddlePart = () => {

  const dispatch=useDispatch();
  const {post}=useSelector(select=>select);
  console.log("selector post store",post)
  
  const [openCreatePostModal,setOpenCreatePostModal]=useState(false);
  const handleCloseCreatePostModal=()=>setOpenCreatePostModal(false);
  const handleOpenCreatePostModal=()=>{
     setOpenCreatePostModal(true); 
  }

  useEffect(()=>{
    dispatch(getAllPostAction());
  },[post.newComment]);

  return (
    <div className="px-20">
      <section className=" flex items-center p-5 rounded-b-md">
        <div className="flex flex-col items-center mr-4 cursor-pointer">
          <Avatar
            // src="https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=600"
            sx={{ width: "5rem", height: "5rem" }}
          >
            <AddIcon sx={{ fontSize: "3rem" }} />
          </Avatar>
          <p>New</p>
        </div>
        {story.map((ele)=><StoryCircle/>)}
      </section>
      <Card className="p-5 mt-5">
        <div className="flex justify-between">
            <Avatar/>
            <input onClick={handleOpenCreatePostModal} readOnly type="text" className="outline-none w-[90%] rounded-full px-5 bg-transparent border-[#3b4054] border"/>
        </div>
        <div className="flex justify-center space-x-9 mt-5">

          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePostModal}>
              <ImageIcon/>
            </IconButton>
            <span>Media</span>
          </div>

          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePostModal}>
              <VideoChatIcon/>
            </IconButton>
            <span>Video</span>
          </div>

          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePostModal}>
              <ArticleIcon/>
            </IconButton>
            <span>Article</span>
          </div>

        </div>
      </Card>
      <div className="mt-5 space-y-5">
        {post.posts.map((item)=><PostCard item={item}/>)}
      </div>
      <div>
        <CreatePostModal handleClose={handleCloseCreatePostModal} open={openCreatePostModal}/>
      </div>
    </div>
  );
};

export default MiddlePart;
