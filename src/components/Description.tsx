import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import EmailForm from './EmailForm';


const Description: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          '@media (max-width:600px)': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
        }}
      >
        <Box component="section" sx={{ 
          padding: {
            xs: 4,  // padding for extra-small screens
            sm: 6,  // padding for small screens
            md: 8,  // padding for medium screens
            lg: 10,  // padding for large screens
            xl: 12,  // padding for extra-large screens
          },
          border: 'none' }}>
          <Typography variant="h4" gutterBottom>
            DoWell Subscribe Newsletter
          </Typography>
          <Typography variant="h6" gutterBottom>
            ✔ Simply obtain your API key
          </Typography>
          <Typography variant="h6" gutterBottom>
            ✔ Retrieve the list of subscribers
          </Typography>
          <Typography variant="h6" gutterBottom>
            ✔ Enable user subscription
          </Typography>
          <Typography variant="h6" gutterBottom>
            ✔ Unsubscribe functionality
          </Typography>
          <Typography variant="h6" gutterBottom>
            ✔ Distribute newsletters
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            At DoWell, we strive to provide a seamless<br/> and efficient subscription process for your newsletter.
          </Typography>
          <EmailForm/>
        </Box>
      </Box>
    </>
  );
};

export default Description;
