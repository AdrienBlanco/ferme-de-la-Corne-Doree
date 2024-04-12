import "./Presentation.scss";

export default function Presentation({ title, text, illustration }) {
    return (
        <section className="presentation">
            <div className="presentation__content">
                <h1 className="presentation__title">{title}</h1>
                <p className="presentation__text">{text}</p>
            </div>
            <div className="presentation__wrapper">
                <img className="presentation__illustration" src={illustration} alt="illustration de la ferme de la corne dorée" />
            </div>
        </section>
    )
}