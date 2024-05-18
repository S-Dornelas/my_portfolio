import { styled } from "@mui/material";
import { Container, Grid, Typography } from "@mui/material";

const About = () => {
    const StyledAbout = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: theme.spacing(2),
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
    
    const StyledCode = styled("code")(({ theme }) => ({    
        color: theme.palette.secondary.main,
        padding: "2px 5px",
        borderRadius: "5px",
        fontWeight: "bold",
    }));

    const StyledTypography = styled(Typography)(({ theme }) => ({
        maxWidth: '100%',
        margin: 'auto',
        [theme.breakpoints.up('sm')]: {
            maxWidth: '60%',
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: '100%',
        },
    }));

    return (
        <StyledAbout id="about">
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography color="secondary" variant="h2" textAlign="center" gutterBottom>
                            QUEM É SANDRO?
                        </Typography>
                        <StyledTypography color="primary.contrastText" variant="h6" textAlign="justify" gutterBottom>
                            Sou formado em <StyledCode>Análise e Desenvolvimento de Sistemas</StyledCode> e tenho grande paixão pela <StyledCode>tecnologia</StyledCode>. Como <StyledCode>desenvolvedor</StyledCode>, estou constantemente me aprimorando nas áreas de <StyledCode>desenvolvimento</StyledCode> e <StyledCode>manutenção de software</StyledCode>, <StyledCode>desenvolvimento web</StyledCode> e <StyledCode>bancos de dados</StyledCode>. Contribuo para a criação e implementação de novas <StyledCode>funcionalidades</StyledCode>, resolvo <StyledCode>problemas técnicos</StyledCode>, faço <StyledCode>manutenção</StyledCode>, <StyledCode>correção de bugs</StyledCode> e ajudo na elaboração de <StyledCode>documentação técnica</StyledCode> para o software.
                        </StyledTypography>
                    </Grid>
                </Grid>
            </Container>
        </StyledAbout>
    );
};

export default About;
