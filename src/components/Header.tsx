import { Box, Tooltip, useMediaQuery } from "@mui/material";

export const Header = () => {
  const isLargeScreen = useMediaQuery('(min-width:1100px)');


  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          display: "flex",
         
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
              src="/logo-2.png"
              alt="Logo"
              style={{
                height: "40px",
                objectFit: "contain",
                marginLeft: "2rem",
              }}
            />
          </Tooltip>
        </Box>
  </Box>
    </>
  );
}