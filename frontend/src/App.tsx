import { AppBar, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import './App.css';
import Routers from './Routers'
import { createTheme, makeStyles, ThemeProvider } from '@mui/material/styles';
import Header from './components/templates/Header';
import Sidebar from './components/templates/Sidebar';

export const App = () => {
  const theme = createTheme({
    typography: {
      fontFamily: [
       'Roboto',
       '"Noto Sans JP"', 
       '"Helvetica"',
       'Arial',
       'sans-serif',
     ].join(','),
    }
  });

  return (
    <ThemeProvider theme={theme} >
      <div className="App">
        <Header />
        <Sidebar />
        <main>
          <Routers/>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;