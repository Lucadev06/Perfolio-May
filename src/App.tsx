import { Box, Button, Typography } from '@mui/material';


function App() {
  return (
    <>
      {/* Imagen arriba ocupando 100% del ancho */}
      <Box component="header" sx={{ width: '100%' }}>
        <img
          src="/principal.jpeg" // corregido: sin `./public`
          alt="principal"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </Box>

      {/* Contenido centrado debajo */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '80vh',
        }}
      >
        <Typography variant="h4">Bienvenido</Typography>
        <Button variant="contained">Acceder</Button>
      </Box>
    </>
  );
}

export default App;
