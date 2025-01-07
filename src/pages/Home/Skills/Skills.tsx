import { useEffect } from 'react';
import Csharp from "../../../assets/images/csharp.png";
import ReactImage from "../../../assets/images/react.png";
import PHPImage from "../../../assets/images/php.png";
import BDImage from "../../../assets/images/bd.png";
import JSImage from "../../../assets/images/javascript.png";
import TSImage from "../../../assets/images/typescript.png";
import CssImage from "../../../assets/images/css.png";
import HtmlImage from "../../../assets/images/html.png";
import az900 from "../../../assets/images/az900.png";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./Skills.css";

const StyledSkills = styled("div")(({ theme }) => ({
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

const StyledTypography = styled(Typography)(({ theme }) => ({
    maxWidth: '100%',
    margin: 'auto',
    [theme.breakpoints.up('sm')]: {
        maxWidth: '100%',
    },
    [theme.breakpoints.up('md')]: {
        maxWidth: '100%',
    },
}));

const StyledModelsContainer = styled("div")({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "50px",
});

const StyledModelsRow = styled("div")({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "30px",  // Diminuir a distância entre os itens
});

const StyledModelsItem = styled("div")(({ theme }) => ({
    width: "150px",
    flex: "1 0 150px",
    display: "flex",
    justifyContent: "center", // Alinha as imagens no centro
    [theme.breakpoints.down('sm')]: {
        width: "100px",
        flex: "1 0 100px",
    },
    img: {
        borderRadius: "12px",  // Bordas arredondadas nas imagens
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Adiciona sombra sutil
        transition: "transform 0.3s ease",  // Animação suave ao passar o mouse
        "&:hover": {
            transform: "scale(1.1)",  // Aumenta a imagem ao passar o mouse
        }
    }
}));

const StyledCode = styled("code")(({ theme }) => ({
    color: theme.palette.secondary.main,
    padding: "2px 5px",
    borderRadius: "5px",
    fontWeight: "bold",
}));

const Skills = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.timeline({
            scrollTrigger: {
                trigger: ".models-container",
                scrub: true,
                start: "top 900px",
                end: "bottom 600px"
            }
        })
        .fromTo(".models-item", {
            opacity: 0,
            y: 160,
        }, {
            opacity: 1,
            y: 0,
            stagger: 1,
            duration: 1
        });
    }, []);

    return (
        <StyledSkills id="skills">
            <Container maxWidth="lg">
                <Typography color="secondary" variant="h2" gutterBottom>
                    EXPERTISES
                </Typography>
                <StyledTypography color="primary.contrastText" variant="h6" textAlign="justify" gutterBottom>
                    Minhas habilidades foram construídas por meio de estudos contínuos e superação de desafios. Sou determinado a evoluir como desenvolvedor a cada dia, buscando sempre ampliar meu conhecimento e aperfeiçoar minhas competências.
                </StyledTypography>
                <br />
                <StyledModelsContainer className="models-container">
                    <StyledModelsRow className="models-row">
                        <StyledModelsItem className="models-item">
                            <img src={Csharp} alt="csharp" style={{ maxWidth: "100%" }} />
                        </StyledModelsItem>
                        <StyledModelsItem className="models-item">
                            <img src={ReactImage} alt="react" style={{ maxWidth: "100%" }} />
                        </StyledModelsItem>
                        <StyledModelsItem className="models-item">
                            <img src={PHPImage} alt="PHP" style={{ maxWidth: "100%" }} />
                        </StyledModelsItem>
                        <StyledModelsItem className="models-item">
                            <img src={BDImage} alt="BD" style={{ maxWidth: "100%" }} />
                        </StyledModelsItem>
                    </StyledModelsRow>
                    <StyledModelsRow className="models-row">
                        <StyledModelsItem className="models-item">
                            <img src={JSImage} alt="js" style={{ maxWidth: "100%" }} />
                        </StyledModelsItem>
                        <StyledModelsItem className="models-item">
                            <img src={TSImage} alt="ts" style={{ maxWidth: "100%" }} />
                        </StyledModelsItem>
                        <StyledModelsItem className="models-item">
                            <img src={CssImage} alt="css" style={{ maxWidth: "100%" }} />
                        </StyledModelsItem>
                        <StyledModelsItem className="models-item">
                            <img src={HtmlImage} alt="html" style={{ maxWidth: "100%" }} />
                        </StyledModelsItem>
                    </StyledModelsRow>
                </StyledModelsContainer>
                <br />
                <br />
                <StyledModelsRow className="models-row" style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                    <StyledModelsItem className="models-item" style={{ flex: "1" }}>
                        <a href="https://learn.microsoft.com/pt-br/users/sandrodornelas-8959/credentials/10cd2350a1669b45?ref=https%3A%2F%2Fwww.linkedin.com%2F" target="_blank" rel="noopener noreferrer">
                            <img title="Clique para visualizar Certificado AZ900" src={az900} alt="az900" style={{ maxWidth: "40%" }} />
                        </a>
                    </StyledModelsItem>
                    <StyledTypography color="primary.contrastText" variant="h6" textAlign="justify" gutterBottom style={{ flex: "2" }}>
                        Com a certificação <StyledCode>Microsoft Certified: Azure Fundamentals</StyledCode> estou preparado para integrar tecnologias de nuvem em projetos, contribuindo para o desenvolvimento de soluções inovadoras e de alto impacto.
                    </StyledTypography>
                </StyledModelsRow>
            </Container>
        </StyledSkills>
    );
};

export default Skills;
