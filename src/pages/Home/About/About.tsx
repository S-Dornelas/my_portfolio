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
                        Sou formado em <StyledCode>Análise e Desenvolvimento de Sistemas</StyledCode>. Como desenvolvedor, estou continuamente me aprimorando em áreas
                        como <StyledCode>desenvolvimento de software</StyledCode>, <StyledCode>manutenção de sistemas</StyledCode>,
                         <StyledCode>desenvolvimento web</StyledCode>, <StyledCode>gestão de bancos de dados</StyledCode> e <StyledCode>tecnologias de nuvem</StyledCode>.
                         Minhas contribuições incluem a criação e implementação de novas funcionalidades,
                         a resolução de problemas técnicos, a realização de manutenção preventiva, a correção de
                         bugs e a elaboração de documentação técnica, sempre com foco na qualidade do código e na
                         eficiência dos processos.
                        <br></br>
                        <br></br>
                        Minha dedicação ao aprendizado constante me permite desenvolver soluções criativas para problemas
                        complexos. Minha paixão por tecnologia e minha capacidade de aprendizado rápido me impulsionam a
                        explorar novas ferramentas e metodologias, aprimorando constantemente minhas habilidades.
                        <br></br>
                        <br></br>
                        Além das competências técnicas, sou uma pessoa <StyledCode>orientada para resultados</StyledCode>,
                        <StyledCode>autodidata</StyledCode> e <StyledCode>adaptável a novos desafios</StyledCode>.
                        Sou reconhecido por minha <StyledCode>proatividade</StyledCode>, <StyledCode>dedicação</StyledCode>,
                         <StyledCode>foco</StyledCode> e <StyledCode>calma</StyledCode> ao lidar com situações desafiadoras.
                         Minhas habilidades analíticas e minha abordagem estruturada para a resolução de problemas me capacitam a enfrentar obstáculos complexos e entregar
                        resultados consistentes e de alta qualidade.</StyledTypography>

                    </Grid>
                </Grid>
            </Container>
        </StyledAbout>
    );
};

export default About;
