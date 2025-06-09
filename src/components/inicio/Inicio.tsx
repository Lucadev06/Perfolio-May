import { Box, Typography } from '@mui/material';

export const Inicio = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '110%',
        height: '100vh', 
        overflow: 'hidden',
      }}
    >
      {/* Imagen de fondo */}
      <Box
  component="img"
  src="/principal2.jpeg"
  alt="principal"
  sx={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'top', 
    zIndex: 1,
  }}
/>


      {/* Texto arriba centrado horizontalmente */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '1.5rem', 
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontFamily: "'Inter', sans-serif",
            color: 'black',
            fontSize: {
              xs: '3.5rem',
              sm: '5rem',
              md: '6rem',
              lg: '6.5rem',
            },
          }}
        >
          Mayara
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontFamily: "'Inter', sans-serif",
            color: 'black',
            fontSize: {
              xs: '3.5rem',
              sm: '5rem',
              md: '6rem',
              lg: '6.5rem',
            },
            paddingLeft: '1rem',
          }}
        >
          Lobo
        </Typography>
      </Box>
    </Box>
  );
};
