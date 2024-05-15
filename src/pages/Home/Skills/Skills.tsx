import { useEffect } from 'react';
import Csharp from "../../../assets/images/csharp.png";
import ReactImage from "../../../assets/images/react.png";
import PHPImage from "../../../assets/images/php.png";
import BDImage from "../../../assets/images/bd.png";
import JSImage from "../../../assets/images/javascript.png";
import TSImage from "../../../assets/images/typescript.png";
import CssImage from "../../../assets/images/css.png";
import HtmlImage from "../../../assets/images/html.png";
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
        maxWidth: '80%',
    },
    [theme.breakpoints.up('md')]: {
        maxWidth: '60%',
    },
}));

const StyledModelsContainer = styled("div")({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
});

const StyledModelsRow = styled("div")({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
});

const StyledModelsItem = styled("div")(({ theme }) => ({
    width: "150px",
    flex: "1 0 150px",
    [theme.breakpoints.down('sm')]: {
        width: "100px",
        flex: "1 0 100px",
    }
}));

const Skills = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.timeline({
            scrollTrigger: {
                trigger: ".models-container",
                scrub: true,
                start: "top 900px",
                end: "bottom 700px"
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
                    Minhas habilidades foram adquiridas através de estudo e enfrentando desafios. Estou determinado a me tornar um desenvolvedor melhor a cada dia.
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
            </Container>
        </StyledSkills>
    );
};

export default Skills;
