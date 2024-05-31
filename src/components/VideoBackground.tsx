import Box from '@mui/material/Box';

const VideoBackground = () => {
  return (
    <Box component="video"
      src="back.mp4"
      autoPlay
      muted
      loop
      sx={{
        position: 'absolute',
        width: '100%',
        height: '100vh', 
        overflow: 'hidden',
        top: 0,
        left: 0,
        objectFit: 'cover',
        zIndex: -1,
      }}>
    </Box>
  );
};

export default VideoBackground;
