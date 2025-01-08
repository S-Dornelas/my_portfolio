import { styled } from "@mui/material/styles";
import { Container, Grid, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import GitHubIcon from '@mui/icons-material/GitHub';
import avatar from "@assets/images/projeto_portfolio.png";
import avatar2 from "@assets/images/tabela.png";
import avatar3 from "@assets/images/asp.png";

// Estilo global dos cards
const StyledProjects = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    minHeight: "80vh",
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
        paddingLeft: theme.spacing(10),
        paddingRight: theme.spacing(10),
    }
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
    maxWidth: '100%',
    margin: 'auto',
}));

const StyledCard = styled(Card)(() => ({
    maxWidth: 400,
    transition: 'transform 0.5s ease-in-out, box-shadow 0.2s ease-in-out',
    '&:hover': {
        transform: 'scale(1.1)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    },
    backgroundColor: '#696969',
}));

// Estilo para os ícones do GitHub
const GitHubButton = styled('a')(() => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1e88e5',
    color: 'white',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    textDecoration: 'none',
    marginTop: '8px',
}));

const GitHubLink = styled(GitHubIcon)(() => ({
    fontSize: '24px',
}));

// Estilização customizada para o conteúdo dos cards
const StyledCardContent = styled(CardContent)(() => ({
    backgroundColor: '#212121',
    color: '#fff',
    padding: '16px',
    textAlign: 'center',
}));

// Estilo para o texto do card
const TypographyStyle = {
    marginBottom: '12px',
    backgroundColor: '#424242',
    padding: '8px',
    borderRadius: '8px',
    display: 'inline-block',
    fontSize: '0.9rem',
};

const Projects = () => {
    return (
        <StyledProjects id="projects">
            <Container maxWidth="lg">
                <Typography color="secondary" variant="h2" gutterBottom>
                    PROJETOS
                </Typography>
                <StyledTypography color="primary.contrastText" variant="h6" textAlign="justify" gutterBottom>
                    Bem-vindo(a) ao meu espaço criativo! Aqui, cada projeto é uma oportunidade de fazer algo extraordinário. Para saber mais sobre meus projetos, confira meu
                    <a href="https://github.com/S-Dornelas" target="_blank" rel="noopener noreferrer" style={{ color: 'secondary.contrastText', textDecoration: 'none' }}> GitHub</a>.
                </StyledTypography>
                <br />
                <Grid container spacing={3}>
                    {/** Card 1 */}
                    <Grid item xs={12} md={4}>
                        <StyledCard>
                            <CardHeader
                                title="Portfolio"
                                subheader="React, TypeScript, Material UI, Gsap e EmailJS"
                                style={{ backgroundColor: '#f5f5f5', padding: '16px' }}
                                titleTypographyProps={{ variant: 'h6', style: { fontWeight: 'bold' } }}
                                subheaderTypographyProps={{ style: { color: '#666' } }}
                            />
                            <CardMedia
                                component="img"
                                height="200"
                                image={avatar}
                                alt="Imagem_portifolio"
                            />
                            <StyledCardContent>
                                <GitHubButton href="https://github.com/S-Dornelas/my_portfolio" target="_blank" rel="noopener noreferrer">
                                    <GitHubLink />
                                </GitHubButton>
                            </StyledCardContent>
                        </StyledCard>
                    </Grid>

                    {/** Card 2 */}
                    <Grid item xs={12} md={4}>
                        <StyledCard>
                            <CardHeader
                                title="Importar Tabelas"
                                subheader="PHP, JavaScript, CSS e MySQL"
                                style={{ backgroundColor: '#f5f5f5', padding: '16px' }}
                                titleTypographyProps={{ variant: 'h6', style: { fontWeight: 'bold' } }}
                                subheaderTypographyProps={{ style: { color: '#666' } }}
                            />
                            <CardMedia
                                component="img"
                                height="200"
                                image={avatar2}
                                alt="Imagem_portifolio"
                            />
                            <StyledCardContent>
                                <GitHubButton href="https://github.com/S-Dornelas/Sistema_Importacao_Tabela" target="_blank" rel="noopener noreferrer">
                                    <GitHubLink />
                                </GitHubButton>
                            </StyledCardContent>
                        </StyledCard>
                    </Grid>

                    {/** Card 3 */}
                    <Grid item xs={12} md={4}>
                        <StyledCard style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', borderRadius: '12px', overflow: 'hidden' }}>
                            <CardHeader
                                title="ASP.NET"
                                subheader="ASP.NET MVC, E.F. Core, HTML com Razor"
                                style={{ backgroundColor: '#f5f5f5', padding: '16px' }}
                                titleTypographyProps={{ variant: 'h6', style: { fontWeight: 'bold' } }}
                                subheaderTypographyProps={{ style: { color: '#666' } }}
                            />
                            <CardMedia
                                component="img"
                                height="200"
                                image={avatar3}
                                alt="Imagem_portifolio"
                                style={{ objectFit: 'cover' }}
                            />
                            <StyledCardContent>
                                <GitHubButton href="https://github.com/S-Dornelas/AplicacaoCompleta" target="_blank" rel="noopener noreferrer">
                                    <GitHubLink />
                                </GitHubButton>
                            </StyledCardContent>
                        </StyledCard>
                    </Grid>
                </Grid>
            </Container>
        </StyledProjects>
    );
};

export default Projects;
