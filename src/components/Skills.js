import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../FirebaseConfig";

const Skills = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const skillsRef = ref(db, "skills");
        onValue(skillsRef, (snapshot) => {
            const data = snapshot.val();
            if (data) setSkills(Object.values(data));
        });
    }, []);

    return (
        <section id="skills" className="p-4">
            <h2 className="text-2xl font-bold">Skills</h2>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;
