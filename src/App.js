

import React, { useState } from 'react';

import './App.css';

//import { Typography, Container } from '@mui/material';

import Login from "./components/Login"

const App = () => {

  const [globalStore, setGlobalStore] = useState(
    {user: {firstname : "", surname: "", useremail: "", password:""}}
    
    )

  return (
    <Login />
  )
}

export default App;
