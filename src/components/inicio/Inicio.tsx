import { Box, Typography } from '@mui/material';

export const Inicio = () => {
  return (
    <>
      <Box component="header" sx={{ position: 'relative', width: '100%' }}>
        {/* Texto encima de la imagen, en columna */}
        <Box
          sx={{
            position: 'absolute',
            top: '1rem',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: "'Inter', sans-serif",
              color: 'black',
              fontSize: {
                xs: '3.5rem',   // mobile
                sm: '5rem',   // tablets
                md: '6rem',   // desktop
                lg: '6.5rem',   // grandes
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
                xs: '3.5rem',   // mobile
                sm: '5rem',   // tablets
                md: '6rem',   // desktop
                lg: '6.5rem',  // grandes
              },
              
              paddingLeft: '1rem', // si querés mantener el "tab" visual
            }}
          >
            Lobo
          </Typography>
        </Box>

        <img
          src="/principal2.jpeg"
          alt="principal"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </Box>
    </>
  );
};
