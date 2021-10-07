



import React, { useState } from 'react';

import { Typography, Container } from '@mui/material';

import getUITxt from "../services/getUITxt"

const Login = () => {

  return (
    <Container maxWidth="sm">
      <Typography variant="body1">
        {getUITxt("login", "username")}
      </Typography>
      <Typography variant="body1">
        {getUITxt("login", "password")}
      </Typography>
    </Container>
  )
}

export default Login