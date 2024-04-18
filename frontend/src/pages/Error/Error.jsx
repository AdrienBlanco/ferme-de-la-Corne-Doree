import { Link } from "react-router-dom";

export default function Error() {
    document.title = "Ferme de la corne dorée - Page not Found"

    return (
            <section className="Error">
                <h1>404</h1>
                <h2>Oups cette page n'existe pas</h2>
                <h3><Link to="/">Retour à l'accueil</Link></h3>
            </section>
    )
};