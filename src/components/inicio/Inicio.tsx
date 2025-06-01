import { Box, Typography } from '@mui/material';

export const Inicio = () => {
  return (
    <>
      {/* Contenedor que incluye imagen y texto superpuesto */}
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
            variant="h3"
            sx={{
              color: 'black',
              fontFamily: "'Playfair Display', serif",
              fontWeight: 600,
            }}
          >
            Mayara
          </Typography>
          <Typography
            variant="h3"
            sx={{
              color: 'black',
              fontFamily: "'Playfair Display', serif",
              fontWeight: 600,
              paddingLeft: '1rem', // sangría visual
            }}
          >
            Lobo
          </Typography>
        </Box>

        {/* Imagen de fondo */}
        <img
          src="/principal2.jpeg"
          alt="principal"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </Box>
    </>
  );
};
