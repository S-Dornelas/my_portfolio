import NavBar from "../../components/NavBar/NavBar"
import About from "./About/About"
import Contacts from "./Contacts/Contacts"
import Hero from "./Hero/Hero"
import Projects from "./Projects/Projects"
import Skills from "./Skills/Skills"
import Footer from "./Footer/Footer"

const Home = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contacts />
            <Footer />
        </>
    )
}

export default Home
