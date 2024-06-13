import React from 'react'
import {Grid,Card} from '@mui/material'
import Login from './Login'
import Register from './Register'
import { Route, Routes } from 'react-router-dom'

const Authentication = () => {
  return (
    <div>
      <Grid container>
        <Grid className='h-screen overflow-hidden' item xs={7}> 
           <img className='h-full w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6V-iFksFyb3Kn6-KyNzF2gSPqG_41brwtFw&s" alt="" />
        </Grid>
        <Grid item xs={5}>
            <div className="px-20 flex flex-col justify-center h-full">
              <Card className="card p-8">
                <div className="flex flex-col items-center mb-5 space-y-1">
                  <h1 className="logo text-center">Social Project</h1>
                  <p className="text-center text-sm w-[80%]">Lorem ipsum dolor sit amet consectetur adipisicing</p>
                </div>
                <Routes>
                  <Route path='/' element={<Login/>}/>
                  <Route path='/login' element={<Login/>}/>
                  <Route path='/register' element={<Register/>}/>
                </Routes>
               
              </Card>
            </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Authentication
