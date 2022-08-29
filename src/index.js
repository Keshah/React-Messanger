import { ThemeProvider, createTheme } from '@mui/material';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';



const theme = createTheme({
dark: {
  color: "#000"
},
light: {
  color: "blue",
},
})



const root = createRoot(document.getElementById('root'));
root.render(
<ThemeProvider theme={theme}>
  <App/>
  </ThemeProvider>);



