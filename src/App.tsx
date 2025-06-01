import { Header } from "./components/Header"
import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Inicio } from "./components/inicio/Inicio";
import { SobreMi } from "./components/sobreMi/SobreMi";
import { Polaroids } from "./components/polaroids/Polaroids";
import { Footer } from "./components/Footer";
import { Contacto } from "./components/contacto/Contacto";


export const App = () => {
  return (
    <BrowserRouter>
      {/* Header siempre visible */}
      <Box >
       <Header />
      </Box>

      {/* Rutas que cambian */}
      <Routes>
        <Route path="/" element={<Navigate to="/inicio" replace />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/sobreMi" element={<SobreMi />} />
        <Route path="/polaroids" element={<Polaroids />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      {/* Footer siempre visible */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
