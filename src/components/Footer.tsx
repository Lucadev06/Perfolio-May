import { Box, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      id="contacto"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: "2rem 1rem",
        backgroundColor: "black",
        color: "white",
        width: "100%",
        textAlign: "center",
      }}
    >
      {/* Sección de contacto */}
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", letterSpacing: "2px", mb: 1 }}>
          Contacto
        </Typography>
        <Typography variant="body2">11 5409-2819</Typography>
        <Typography variant="body2" mt={1}>mayaraloboo@gmail.com</Typography>
      </Box>

      {/* Línea divisoria sutil */}
      <Box
        sx={{
          width: "60%",
          height: "1px",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          mb: 2,
        }}
      />

      {/* Derechos reservados */}
      <Typography variant="caption" sx={{ opacity: 0.7 }}>
        © {new Date().getFullYear()} Mayara Lobo. Todos los derechos reservados.
      </Typography>
    </Box>
  );
};
