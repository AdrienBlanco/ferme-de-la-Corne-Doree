import { Link } from "react-router-dom";
import "./Error.scss";

export default function Error() {
    document.title = "Ferme de la corne dorée - Page not Found"

    return (
            <section className="error">
                <h2 className="error__title">404</h2>
                <p>Oups cette page n'existe pas</p>
                <p><Link to="/" className="error__link">Retour à l'accueil</Link></p>
            </section>
    )
};