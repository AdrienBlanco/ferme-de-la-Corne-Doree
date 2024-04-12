import "./Presentation.scss";

export default function Presentation({ sectionClass, title, text, illustration }) {
    return (
        <section className={sectionClass}>
            <div className={`${sectionClass}__content`}>
                <h1 className={`${sectionClass}__title`}>{title}</h1>
                <p className={`${sectionClass}__text`}>{text}</p>
            </div>
            <div className={`${sectionClass}__wrapper`}>
                <img className={`${sectionClass}__illustration`} src={illustration} alt="illustration de la ferme de la corne dorée" />
            </div>
        </section>
    )
}