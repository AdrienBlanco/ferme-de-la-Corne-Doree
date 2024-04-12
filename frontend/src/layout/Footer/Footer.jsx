import ContactForm from "../../components/ContactForm/ContactForm"
import Coordonnees from "../../components/Coordonnees/Coordonnees"
import "./Footer.scss";

export default function Footer() {
    return (
        <footer className="footer">
            <ContactForm />
            <Coordonnees />
        </footer>
    )
};
