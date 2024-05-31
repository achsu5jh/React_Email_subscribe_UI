import React from 'react';
import VideoBackground from './components/VideoBackground'; 
import Description from './components/Description'
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import './fonts.css';

const App: React.FC = () => {
  return (
    <>
      <VideoBackground />
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            height: '90vh',
            display: 'flex',
            flexDirection: 'column',
            '@media (max-width:600px)': {
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            },
          }}
        >
          <Description />
        </Box>
      </ThemeProvider>
    </>
  );
};

export default App;
