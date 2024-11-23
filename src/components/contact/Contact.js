import { useState } from "react";
import { ref, push } from "firebase/database";
import { db } from "../../FirebaseConfig";

const Contact = () => {
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const messagesRef = ref(db, "messages");
        push(messagesRef, { message });
        setMessage("");
        alert("Message sent!");
    };

    return (
        <section id="contact" className="p-4">
            <h2 className="text-2xl font-bold">Contact</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your message"
                    className="border p-2 w-full"
                ></textarea>
                <button type="submit" className="bg-blue-500 text-white p-2 mt-2">
                    Send
                </button>
            </form>
        </section>
    );
};

export default Contact;
