import React, { useState, ChangeEvent, FormEvent } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const EmailForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateEmail(email)) {
      setSubmitted(true);
      setError(false);
      // Add form submission logic here (e.g., send data to a server)
    } else {
      setError(true);
    }
  };

  const validateEmail = (email: string): boolean => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <Box
      component="section"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& .MuiTextField-root': { mb: 2, width: '100%' },
        '& .MuiButton-root': { width: '100%' },
        maxWidth: 300,
      }}
    >
      <TextField
        variant="outlined"
        value={email}
        onChange={handleChange}
        error={error}
        helperText={error ? 'Please enter a valid email address.' : ''}
        sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                color: '#2e80fc',
                
                borderColor: '#ffffff', // Default border color
              },
              '&:hover fieldset': {
                
                borderColor: '#2e80fc', // Border color on hover
              },
              '&.Mui-focused fieldset': {
                
                borderColor: '#ffffff', // Border color when focused
              },
              '& .MuiInputLabel-root': {
                color: 'red', // Label color
              },
              '& .MuiInputBase-input': {
                color: 'white', // Input text color
              },
            },
          }}
      />
      <Button type="submit" variant="contained" color="primary">
        Subscribe
      </Button>
      {submitted && !error && (
        <Typography variant="body1" color="success.main" sx={{ mt: 2 }}>
          Thank you for subscribing!
        </Typography>
      )}
    </Box>
  );
};

export default EmailForm;
