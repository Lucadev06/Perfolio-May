import {
  Box,
  TextField,
  Typography,
  Button,
  CircularProgress
} from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';
import { useForm, ValidationError } from '@formspree/react';
import { useNavigate } from "react-router-dom";

export const Contacto = () => {
  const navigate = useNavigate();
  const [state, handleSubmit] = useForm("mjkrvnrj");

  if (state.succeeded) {
    setTimeout(() => navigate("/inicio"), 3000);
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f9f9f9",
          padding: 2,
        }}
      >
        <Box
          sx={{
            backgroundColor: "#e6ffed",
            color: "#237804",
            border: "1px solid #b7eb8f",
            padding: "1.5rem 2rem",
            borderRadius: "0.75rem",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            fontWeight: 500,
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <DoneIcon sx={{ color: "#52c41a" }} />
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            ¡Tu mensaje fue enviado exitosamente!
          </Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f9f9f9",
        padding: "2rem 1rem",
        width: "100%",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
         
       
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 3,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "2rem", sm: "2.5rem" },
          }}
        >
          Contactame
        </Typography>

        <Typography
          sx={{
            color: "#666",
            fontSize: { xs: "1rem", sm: "1.1rem" },
          }}
        >
           ¿Querés trabajar conmigo o tenés una propuesta? ¡Mandame un mensaje!
        </Typography>

        <TextField
          id="name"
          type="text"
          name="name"
          label="Nombre"
          variant="outlined"
          required
          fullWidth
        />
        <ValidationError prefix="Nombre" field="name" errors={state.errors} />

        <TextField
          id="email"
          type="email"
          name="email"
          label="Email"
          variant="outlined"
          required
          fullWidth
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <TextField
          id="message"
          name="message"
          label="Mensaje"
          multiline
          rows={5}
          variant="outlined"
          required
          fullWidth
        />
        <ValidationError prefix="Mensaje" field="message" errors={state.errors} />

        <Button
          type="submit"
          variant="contained"
          disabled={state.submitting}
          sx={{
            width: "50%",
            backgroundColor: "#f9b234",
            fontWeight: "bold",
            borderRadius: "2rem",
            px: 4,
            py: 1.2,
            "&:hover": {
              backgroundColor: state.submitting ? "#f9b234" : "#e5a020",
            },
          }}
        >
          {state.submitting ? (
            <CircularProgress size={22} color="inherit" />
          ) : (
            "Enviar"
          )}
        </Button>
      </Box>
    </Box>
  );
};
