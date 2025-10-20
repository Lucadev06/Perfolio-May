import { Header } from "./components/Header";
import { Box } from "@mui/material";
import { Inicio } from "./components/inicio/Inicio";
import { Polaroids } from "./components/polaroids/Polaroids";
import { Footer } from "./components/Footer";


export const App = () => {
  return (
    <>
      <Header />
      <Box component="main">
        <section id="inicio">
          <Inicio />
        </section>
        
        <section id="polaroids">
          <Polaroids />
        </section>
      </Box>
      <Footer />
    </>
  );
};

export default App;
