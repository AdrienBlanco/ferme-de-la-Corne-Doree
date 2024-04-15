import Contact from "../../components/Contact/Contact"
import Coordonnees from "../../components/Coordonnees/Coordonnees"
import "./Footer.scss";

export default function Footer() {
    return (
        <footer className="footer">
            <Contact />
            <Coordonnees />
        </footer>
    )
};
