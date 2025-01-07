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
                        Sou formado em <StyledCode>Análise e Desenvolvimento de Sistemas</StyledCode> e tenho grande paixão pela <StyledCode>tecnologia</StyledCode>. Como <StyledCode>desenvolvedor</StyledCode>, estou constantemente me aprimorando nas áreas de <StyledCode>desenvolvimento de software</StyledCode>, <StyledCode>manutenção de sistemas</StyledCode>, <StyledCode>desenvolvimento web</StyledCode>, <StyledCode>gestão de bancos de dados</StyledCode> e <StyledCode>tecnologias de nuvem</StyledCode>.
                        <br></br>
                        Contribuo para a criação e implementação de novas <StyledCode>funcionalidades</StyledCode>, resolvo <StyledCode>problemas técnicos</StyledCode>, faço <StyledCode>manutenção preventiva</StyledCode>, corrijo <StyledCode>bugs</StyledCode> e ajudo na elaboração de <StyledCode>documentação técnica</StyledCode> para o software, sempre visando a qualidade de código e a eficiência de processos.
                        <br></br>
                        Tenho me dedicado ao aprimoramento, o que me permite desenvolver soluções criativas para problemas complexos, contribuindo para a criação e implementação de novas <StyledCode>funcionalidades</StyledCode>, além de participar ativamente na resolução de incidentes, otimização de performance e <StyledCode>gerenciamento de versões</StyledCode>, assim como ajudar a criar <StyledCode>documentação técnica</StyledCode> para o software. Minha experiência com <StyledCode>tecnologias de nuvem</StyledCode>, como <StyledCode>Azure</StyledCode>, me capacitou a criar soluções escaláveis e otimizar processos em ambientes distribuídos.
                        <br></br>
                        Minha capacidade de aprendizado rápido e minha paixão pela <StyledCode>tecnologia</StyledCode> me incentiva a buscar sempre novas formas de aprimorar minhas expertises técnicas.
                        <br></br>
                        Além das minhas habilidades técnicas, também sou uma pessoa <StyledCode>orientada para resultados</StyledCode>, <StyledCode>autodidata</StyledCode>, que se <StyledCode>adapta facilmente a novos desafios</StyledCode>. Sou conhecido por ser proativo, dedicado, focado e calmo, com habilidades analíticas e de resolução de problemas, o que me permite enfrentar desafios complexos de forma eficaz e entregar resultados consistentes.</StyledTypography>
                    </Grid>
                </Grid>
            </Container>
        </StyledAbout>
    );
};

export default About;
