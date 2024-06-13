import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useFormik } from "formik";
import { Avatar, IconButton } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { uploadToCloudniry } from "../../utils/uploadToCloudniry";
import { useDispatch } from "react-redux";
import { createCommentAction, createPostAction } from "../../Redux/Post/post.action";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: ".6rem",
  outline: "none",
};

const CreatePostModal = ({ handleClose, open }) => {

  const [selectedImage, setSelectedImage] = useState();
  const [selectedVideo, setSelectedVideo] = useState();
  const [isLoading,setIsLoading]=useState(false);

  const dispatch=useDispatch();

  const handleSelectImage = async(event) => {
    setIsLoading(true);
    const imageUrl=await uploadToCloudniry(event.target.files[0],"image");
    setSelectedImage(imageUrl);
    setIsLoading(false);
    formik.setFieldValue("image",imageUrl);
  };
  const handleSelectVideo = async(event) => {
    setIsLoading(true);
    const videoUrl=await uploadToCloudniry(event.target.files[0],"video");
    setSelectedVideo(videoUrl);
    setIsLoading(false);
    formik.setFieldValue("video",videoUrl);
  };

  const formik = useFormik({
    initialValues:{
        caption:"",
        image:"",
        video:""
    },
    onSubmit:(values)=>{
        console.log("formik values",values);
        dispatch(createPostAction(values));
    }
  });


  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <form onSubmit={formik.handleSubmit}>
          <div className="">
            <div className="flex space-x-4 items-center">
              <Avatar />
              <div className="">
                <p className="font-bold text-lg">Cos</p>
                <p className="text-sm">@usj</p>
              </div>
            </div>
            <textarea
              className="outline-none w-full mt-5 p-2 bg-transparent border border-[#3b4054] rounded-sm"
              name="caption"
              id=""
              placeholder="Write a Caption."
              rows={4}
              onChange={formik.handleChange}
              value={formik.values.caption}
            ></textarea>
            <div className="flex space-x-5 items-center mt-5">
              <div className="">
                <input
                  type="file"
                  accept="images/*"
                  onChange={handleSelectImage}
                  style={{ display: "none" }}
                  id="image-input"
                />
                <label htmlFor="image-input">
                  <IconButton color="primary" component="span">
                    <AddPhotoAlternateIcon />
                  </IconButton>
                </label>
                <span>Image</span>
              </div>
              <div className="">
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleSelectVideo}
                  style={{ display: "none" }}
                  id="video-input"
                />
                <label htmlFor="video-input">
                  <IconButton color="primary" component="span">
                    <VideoCameraBackIcon />
                  </IconButton>
                </label>
                <span>Video</span>
              </div>
            </div>

            {selectedImage && (
              <div className="">
                <img className="h-[10rem]" src={selectedImage} alt="" />
              </div>
            )}

            <div className="flex w-full justify-end">
              <Button
                type="submit"
                variant="contained"
                sx={{ borderRadius: "1.5rem" }}
              >
                Post
              </Button>
            </div>
          </div>
        </form>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoading}
          onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </Box>
    </Modal>
  );
};

export default CreatePostModal;
