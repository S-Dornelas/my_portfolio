import { styled } from "@mui/material";
import { Container, Grid, Typography, Box, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import perfil from "@assets/images/perfil.png";
import { AnimatedBackground } from "@components/AnimateBackground/AnimacaoBackground";

const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: theme.spacing(5),
    [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing(10),
        paddingLeft: theme.spacing(10),
        paddingRight: theme.spacing(10),
    },
    [theme.breakpoints.up('md')]: {
        paddingTop: theme.spacing(10),
        paddingLeft: theme.spacing(20),
        paddingRight: theme.spacing(20),
    }
}));

const StyledImg = styled("img")(({ theme }) => ({
    width: "100%",
    maxWidth: "300px",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`
}));

const StyledCode = styled("code")(({ theme }) => ({
    color: theme.palette.secondary.contrastText,
    padding: "2px 5px",
    borderRadius: "5px",
    fontWeight: "bold",
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
    maxWidth: '100%',
    margin: 'auto',
    [theme.breakpoints.up('sm')]: {
        maxWidth: '80%',
    },
    [theme.breakpoints.up('md')]: {
        maxWidth: '90%',
    },
}));

const Hero = () => {
    return (
        <StyledHero id="hero">
            <Container maxWidth="lg">
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} md={4}>
                        <Box position="relative">
                            <Box position="absolute" width={"130%"} top={-80} right={-50}>
                                <AnimatedBackground />
                            </Box>
                            <Box position="relative" textAlign="center">
                                <StyledImg src={perfil} alt="Avatar" />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <motion.div
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2 }}
                        >
                            <StyledTypography color="secondary" variant="h4" textAlign="center" gutterBottom>
                                Olá! Me chamo <StyledCode>Sandro Dornelas</StyledCode>, seja bem-vindo ao meu portfólio. Aqui você conhecerá um pouco sobre mim e minhas habilidades.
                            </StyledTypography>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 2 }}
                        >
                            <StyledTypography color="primary.contrastText" variant="h2" textAlign="center" gutterBottom>
                                <StyledCode>Full Stack Developer</StyledCode>
                            </StyledTypography>
                        </motion.div>
                        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                            <IconButton href="https://github.com/S-Dornelas" target="_blank" sx={{ color: 'white' }}>
                                <GitHubIcon sx={{ fontSize: 30 }} />
                            </IconButton>
                            <IconButton href="https://www.linkedin.com/in/sandrodornelas/" target="_blank" sx={{ color: 'white' }}>
                                <LinkedInIcon sx={{ fontSize: 30 }} />
                            </IconButton>
                            <IconButton href="https://wa.me/5581994332276" target="_blank" sx={{ color: 'white' }}>
                                <WhatsAppIcon sx={{ fontSize: 30 }} />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>
            </Container >
        </StyledHero >
    );
};

export default Hero;
