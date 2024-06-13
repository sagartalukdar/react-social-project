import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Route, Routes, useLocation } from 'react-router-dom'
import MiddlePart from '../../components/MiddlePart/MiddlePart'
import Reels from '../../components/Reel/Reels'
import CreateReelForm from '../../components/Reel/CreateReelForm'
import Profile from '../../components/Profile/Profile'
import HomeRight from '../../components/HomeRight/HomeRight'
import { useDispatch, useSelector } from 'react-redux'


const HomePage = () => {

    const location=useLocation();
    const dispatch=useDispatch();
    const jwt=localStorage.getItem("jwt");
    const {auth}=useSelector(store=>store);

    console.log("auth" ,auth); 

  return (
    <div className='px-20'>
        <Grid container spacing={0}>
            <Grid item xs={0} lg={3}>
               <div className="sticky top-0">
                  <Sidebar/>
               </div>
            </Grid>
            <Grid lg={location.pathname==="/"?6:9} item className='px-5 flex justify-center' xs={12}>
                <Routes>
                  <Route path='/' element={<MiddlePart/>}/>
                  <Route path='/reels' element={<Reels/>}/>
                  <Route path='/create-reels' element={<CreateReelForm/>}/>
                  <Route path='/profile/:id' element={<Profile/>}/>
                </Routes>
            </Grid>
            {location.pathname==='/' && <Grid item lg={3} className='relative'>
                  <div className='sticky top-0 w-full'>
                      <HomeRight/>
                  </div>
              </Grid>}
        </Grid>
    </div>
  )
}

export default HomePage
