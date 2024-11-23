import Header from "./components/header/Header";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import "./styles.css";

function App() {
    return (
        <div>
            <Header />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
