import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import { SiTiktok } from "react-icons/si";

import { Button, Box, Tooltip } from "@mui/material";

export  const  Footer = () => {
  return (
    
    <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "1rem",
      gap: "1rem",
      backgroundColor: "black", // Fondo
      borderRadius: "1rem",
      boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)", // Sombra sutil para destacar
      marginTop: "1rem", // Espacio entre el contenido y el footer
  
    }}
  >
    <Box
      sx={{
        display: "flex",
        justifyContent: "right",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      <Button>
        <Tooltip title="Hablanos y cotiza tu sueño">
          <a href="https://wa.me/5491154092819" target="_blank">
            <WhatsAppIcon sx={{color: "white"}}/>
          </a>
        </Tooltip>

       
      </Button>
      
      <Button>
        <a href="https://www.instagram.com/mayylobo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
          <InstagramIcon sx={{color: "white"}}/>
        </a>
      </Button>

      <Button>
      <a href="https://www.tiktok.com/@mayylobo" target="_blank" rel="noopener noreferrer">
          <SiTiktok size={20} color="white" />
        </a>
      </Button>
    </Box>

  </Box>
  )
}
