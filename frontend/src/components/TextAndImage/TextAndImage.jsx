import "./TextAndImage.scss";

export default function TextAndImage({ sectionClass, title, text, src, alt, reverse, alignEnd }) {
    return (
        <section className={`${sectionClass} ${reverse}`}>
            <div className={`${sectionClass}__content`}>
                <h2 className={`${sectionClass}__title ${alignEnd}`}>{title}</h2>
                <p className={`${sectionClass}__text`}>{text}</p>
            </div>
            <div className={`${sectionClass}__wrapper`}>
                <img className={`${sectionClass}__illustration`} src={src} alt={alt} />
            </div>
        </section>
    )
}