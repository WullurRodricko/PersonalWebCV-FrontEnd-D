import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../../FirebaseConfig";

const About = () => {
    const [about, setAbout] = useState("");

    useEffect(() => {
        const aboutRef = ref(db, "about");
        onValue(aboutRef, (snapshot) => {
            const data = snapshot.val();
            if (data) setAbout(data);
        });
    }, []);

    return (
        <section id="about" className="p-4">
            <h2 className="text-2xl font-bold">Rodricko Wullur</h2>
            
            <p>{about}</p>
        </section>
    );
};

export default About;
