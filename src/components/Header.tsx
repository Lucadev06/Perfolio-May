import { Box, Button, Drawer, IconButton, Tooltip, Typography, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isLargeScreen = useMediaQuery('(min-width:1100px)');

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsDrawerOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem",
          zIndex: 1000,
          maxWidth: "100%",
          backgroundColor: isLargeScreen ? "transparent" : "",
        }}
      >
        {/* Logo a la izquierda */}
        <Box sx={{ width: "33%", display: "flex", alignItems: "center" }}>
          <Tooltip title="Mayara Lobo">
            <img
              src="/logo.png"
              alt="Logo"
              style={{
                height: "40px",
                objectFit: "contain",
                marginLeft: "2rem",
              }}
            />
          </Tooltip>
        </Box>

        {/* Nombre centrado */}
        <Box
          sx={{
            width: "34%",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Quicksand', sans-serif",
              fontWeight: 700,
              color: "black",
              fontSize: {
                xs: "1.7rem",
                sm: "2.5rem",
                md: "3rem",
              },
              lineHeight: 1.2,
              userSelect: "none",
            }}
          >
            Mayara Lobo
          </Typography>
        </Box>

        {/* Menú hamburguesa a la derecha */}
        <Box
          sx={{
            width: "33%",
            display: "flex",
            justifyContent: "flex-end",
            pr: "2rem",
          }}
        >
          <IconButton
            onClick={() => setIsDrawerOpen(true)}
            disableRipple
            sx={{
              "&:focus-visible": { outline: "none", boxShadow: "none" },
              "&:focus": { outline: "none", boxShadow: "none" },
              "&:active": { transform: "none" },
            }}
          >
            <MenuIcon sx={{ color: "black" }} />
          </IconButton>
        </Box>
      </Box>

      {/* Drawer inferior */}
      <Drawer
        anchor="bottom"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        ModalProps={{ keepMounted: true, disableScrollLock: true }}
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
          {[{ id: "inicio", label: "Inicio" }, { id: "portfolio", label: "Portfolio" }, { id: "contacto", label: "Contacto" }].map((item) => (
            <Button
              key={item.id}
              variant="text"
              sx={{ color: "white" }}
              onClick={() => handleScroll(item.id)}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Drawer>
    </>
  );
}