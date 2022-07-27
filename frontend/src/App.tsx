import { AppBar, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import './App.css';
import Routers from './Routers'
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {
  
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
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography color="inherit">
              react-dotnet-postgres
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
        >
        </Drawer>
        <main>
          <Routers/>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
