import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Typography, Button } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';

export const Contacto = () => {
    {/* States */ }
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);

    {/* Navigate */ }
    const navigate = useNavigate();

    {/* Post (envio a mail personal) */ }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSending(true);

        const formData = {
            name: name,
            email: email,
            message: message,
        };

        const response = await fetch("https://formspree.io/f/manozrnr", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            setName("");
            setEmail("");
            setMessage("");
            setIsSent(true);
        } else {
            alert("Hubo un error al enviar el mensaje.");
        }
        setIsSending(false);
        setTimeout(() => {
           setIsSent(false);
            navigate("/Blog");
        }, 3000);
    };

    return (
        <>

            <Box
                sx={{
                    backgroundColor: "#f9f9f9",
                    padding: "3rem 2rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                {isSent ? (
                    <Box
                        sx={{
                            backgroundColor: "#e6ffed",
                            color: "#237804",
                            border: "1px solid #b7eb8f",
                            padding: "1rem 1.5rem",
                            borderRadius: "0.6rem",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.75rem",
                            fontWeight: 500,
                            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                            animation: "fadeIn 0.4s ease-out",
                            marginTop: "10rem",
                            marginBottom: "20rem",
                        }}
                    >
                        <DoneIcon sx={{ color: "#52c41a" }} />
                        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                            ¡Tu mensaje fue enviado exitosamente!
                        </Typography>
                    </Box>
                ) : (

                    <>
                        <Typography
                            variant="h3"
                            sx={{ fontWeight: "bold", mb: 3, textAlign: "center" }}
                        >
                            Contactame
                        </Typography>

                        <Typography sx={{ mb: 4, color: "#666", textAlign: "center" }}>
                            ¿Tenés una idea o proyecto? ¡Mandame un mensaje y lo charlamos!
                        </Typography>

                        <Box
                            component="form"
                            onSubmit={handleSubmit}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 2,
                                width: "100%",
                                maxWidth: "500px",
                            }}

                        >
                            {/* Nombre */}
                            <TextField
                                name="name"
                                label="Nombre"
                                variant="outlined"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />

                            {/* Interes */}
                            <TextField
                                name="email"
                                label="Email"
                                type="email"
                                variant="outlined"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />

                            {/* Mensaje */}
                            <TextField
                                name="message"
                                label="Mensaje"
                                variant="outlined"
                                multiline
                                rows={5}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                disabled={isSending}
                                sx={{
                                    backgroundColor: "#f9b234",
                                    fontWeight: "bold",
                                    borderRadius: "2rem",
                                    "&:hover": {
                                        backgroundColor: isSending ? "#f9b234" : "#e5a020",
                                    },
                                }}
                            >
                                {isSending ? "Enviando..." : "Enviar"}
                            </Button>
                        </Box>
                    </>
                )}
            </Box>


        </>
    );
};