import logo from './logo.svg';
import './App.css';
import Authentication from './pages/Authentication/Authentication';
import { Route, Routes } from 'react-router-dom';
import Message from './pages/Message/Message';
import HomePage from './pages/HomePage/HomePage';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileAction } from './Redux/Auth/auth.action';
import { useEffect } from 'react';
import { ThemeProvider } from '@mui/material';
import { darkTheme } from './theme/DarkTheme';

function App() {
  const {auth}=useSelector(store=>store);
  const dispatch=useDispatch();
  const jwt=localStorage.getItem("jwt");

  useEffect(()=>{
    dispatch(getProfileAction(jwt));
  },[jwt])

  return (
    <ThemeProvider theme={darkTheme}>
        
      <Routes>
        <Route path='/*' element={auth.user?<HomePage/>:<Authentication/>} />
        <Route path='/message' element={<Message/>} />  
        <Route path='/*' element={<Authentication/>} />     
      </Routes>
 
    </ThemeProvider>
  );
}

export default App;
