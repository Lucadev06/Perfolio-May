import { Box, Typography, useMediaQuery } from '@mui/material';
import { FaInstagram, FaTiktok } from 'react-icons/fa';

export const Inicio = () => {
const isLargeScreen = useMediaQuery('(min-width:1100px)');
  return (
   <Box
  id="inicio"
  sx={{
    position: 'relative',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
    marginTop: isLargeScreen ? '5rem' : '0', // o el valor que quieras
  }}
>

      {/* Imagen de fondo */}
      <Box
        component="img"
        src="/public/principal.jpeg"
        alt="principal"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          zIndex: 1,
        }}
      />

      {/* Texto centrado */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          px: 2,
          backgroundColor: 'rgba(0, 0, 0, 0.3)', // Fondo oscuro semitransparente para el texto
        }}
      >
        <Typography variant="h1" component="h1" sx={{ color: 'white', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
          Mayara Lobo
        </Typography>
        <Typography variant="h5" component="h2" sx={{ color: 'white', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
          Modelo Profesional
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, marginTop: 2 }}>
          <a href="https://www.instagram.com/mayylobo/" target="_blank" rel="noopener noreferrer">
            <FaInstagram style={{ color: 'white', fontSize: '2rem' }} />
          </a>
          <a href="https://www.tiktok.com/@mayylobo" target="_blank" rel="noopener noreferrer">
            <FaTiktok style={{ color: 'white', fontSize: '2rem' }} />
          </a>
        </Box>
      </Box>
    </Box>
  );
};
