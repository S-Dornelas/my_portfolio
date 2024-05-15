import { Container, Grid, Typography, Button, TextField, Link, Alert } from "@mui/material";
import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Contacts = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    useEffect(() => {
        if (successMessage) {
            const timer = setTimeout(() => {
                setSuccessMessage(null);
            }, 5000); 
            return () => clearTimeout(timer);
        }
    }, [successMessage]);

    function sendEmail(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (name === '' || email === '' || message === '') {
            setError("Preencha todos os campos.");
            return;
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }

        emailjs.send("service_r739f59", "template_25xgiij", templateParams, "GVsJElLBRgAPCqdwJ")
            .then((response) => {
                console.log("EMAIL ENVIADO", response.status, response.text);
                setName('');
                setEmail('');
                setMessage('');
                setSuccessMessage("Mensagem enviada com sucesso!");
                setError(null);
            })
            .catch((err) => {
                console.log("ERRO: ", err);
                setError("Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.");
            });
    };

    return (
        <div id="contacts" style={{ backgroundColor: "#232323", minHeight: "60vh", paddingTop: "32px", paddingBottom: "32px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <Container maxWidth="lg">
                <Typography color="secondary" variant="h2" textAlign="center" gutterBottom>
                    CONTATOS
                </Typography>
                <Typography color="primary.contrastText" textAlign="center" variant="h6" gutterBottom>
                    Para entrar em contato comigo, envie um e-mail ou escolha sua rede social preferida.
                </Typography>
                <br />
                {error && <Alert severity="error">{error}</Alert>}
                {successMessage && <Alert severity="success">{successMessage}</Alert>}

                <Grid container spacing={3} justifyContent="center">
                    <Grid item xs={12} sm={8} md={6}>
                        <form noValidate autoComplete="off" onSubmit={sendEmail}>
                            <TextField
                                color="secondary"
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Digite seu nome"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                InputProps={{
                                    sx: { color: 'white' },
                                }}
                                InputLabelProps={{
                                    sx: { color: 'white' },
                                }}
                            />
                            <TextField
                                color="secondary"
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Digite seu email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                InputProps={{
                                    sx: { color: 'white' },
                                }}
                                InputLabelProps={{
                                    sx: { color: 'white' },
                                }}
                            />
                            <TextField
                                color="secondary"
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Digite sua mensagem"
                                type="text"
                                multiline
                                rows={4}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                InputProps={{
                                    sx: { color: 'white' },
                                }}
                                InputLabelProps={{
                                    sx: { color: 'white' },
                                }}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                color="secondary"
                                fullWidth
                                sx={{ mt: 2 }}
                            >
                                Enviar Mensagem
                            </Button>
                        </form>
                    </Grid>
                </Grid>
                <Grid container justifyContent="center" spacing={2} style={{ marginTop: '20px' }}>
                    <Grid item>
                        <Link href="https://github.com/S-Dornelas" target="_blank" rel="noopener noreferrer" sx={{ color: 'white', textDecoration: 'none' }}>
                            <GitHubIcon sx={{ fontSize: 30 }} />
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="https://www.linkedin.com/in/sandrodornelas/" target="_blank" rel="noopener noreferrer" sx={{ color: 'white', textDecoration: 'none' }}>
                            <LinkedInIcon sx={{ fontSize: 30 }} />
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="https://wa.me/5581994332276" target="_blank" rel="noopener noreferrer" sx={{ color: 'white', textDecoration: 'none' }}>
                            <WhatsAppIcon sx={{ fontSize: 30 }} />
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Contacts;
