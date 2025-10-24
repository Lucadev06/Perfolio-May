import { Box, Typography, useMediaQuery } from '@mui/material';
import { FaInstagram, FaTiktok } from 'react-icons/fa';

export const Inicio = () => {
  const isLargeScreen = useMediaQuery('(min-width:1100px)');
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <Box
      id="inicio"
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        marginTop: isLargeScreen ? '5rem' : '0',
      }}
    >
      {/* Imagen de fondo */}
      <Box
        component="img"
        src="/principal.jpeg"
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
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
        }}
      >
        <Box sx={{ marginTop: isSmallScreen ? '12rem' : '0' }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: isSmallScreen ? '2rem' : '4rem', // 👈 ajuste responsive
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            }}
          >
            Mayara Lobo
          </Typography>
        </Box>

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
