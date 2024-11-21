import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../FirebaseConfig";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const projectsRef = ref(db, "projects");
        onValue(projectsRef, (snapshot) => {
            const data = snapshot.val();
            if (data) setProjects(Object.values(data));
        });
    }, []);

    return (
        <section id="projects" className="p-4">
            <h2 className="text-2xl font-bold">Projects</h2>
            <ul>
                {projects.map((project, index) => (
                    <li key={index}>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Projects;
