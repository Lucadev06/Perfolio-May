import { Box, Button, Drawer, IconButton, Tooltip } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const navigate = useNavigate();
  const redirect = (ruta: string) => {
    navigate(ruta);
  };

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "90%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem",
          // semitransparente
          zIndex: 1000,
        }}
      >

        {/* Logo a la izquierda */}
        <Box sx={{ width: "33%", display: "flex", alignItems: "center" }}>
          <Tooltip title="Mayara Lobo">
            <img src="/logo.png" alt="Logo" style={{ height: "40px", objectFit: "contain", marginLeft: "2rem" }} />
          </Tooltip>
        </Box>

        {/* Menú hamburguesa a la derecha */}
        <Box sx={{ width: "33%", display: "flex", justifyContent: "flex-end" }}>
          <IconButton
            onClick={() => setIsDrawerOpen(true)}
            disableRipple
            sx={{
              '&:focus-visible': {
                outline: 'none',
                boxShadow: 'none',
              },
              '&:focus': {
                outline: 'none',
                boxShadow: 'none',
              },
              '&:active': {
                transform: 'none',
              },
            }}
          >
            <MenuIcon sx={{ color: "black" }} />
          </IconButton>


        </Box>
      </Box>

      <Drawer
        anchor="bottom"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        ModalProps={{
          keepMounted: true,
          disableScrollLock: true,
        }}
        PaperProps={{
          sx: {
            backgroundColor: "black",
            color: "white",
            width: "100%",
            height: "50%",
          },
        }}
      >

        {/* Encabezado del Drawer */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem",
          }}
        >
          <Tooltip title="Luca Simonazzi">
            <img src="/logo.png" alt="Logo" style={{ height: "40px" }} />
          </Tooltip>
          <IconButton onClick={() => setIsDrawerOpen(false)}>
            <CloseIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>

        {/* Menú de navegación */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "1rem 2rem",
            gap: "1rem",
          }}
        >
          <Button variant="text" sx={{ color: "white" }} onClick={() => { redirect("/inicio"); setIsDrawerOpen(false); }}>
            Inicio
          </Button>
          <Button variant="text" sx={{ color: "white" }} onClick={() => { redirect("/sobreMi"); setIsDrawerOpen(false); }}>
            Sobre mí
          </Button>
          <Button variant="text" sx={{ color: "white" }} onClick={() => { redirect("/polaroids"); setIsDrawerOpen(false); }}>
            Polaroids
          </Button>
          <Button variant="text" sx={{ color: "white" }} onClick={() => { redirect("/contacto"); setIsDrawerOpen(false); }}>
            Contacto
          </Button>
        </Box>
      </Drawer>
    </>
  );
};
