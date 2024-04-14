import "./TextAndImage.scss";

export default function TextAndImage({ sectionClass, title, text, src, alt }) {
    return (
        <section className={sectionClass}>
            <div className={`${sectionClass}__content`}>
                <h1 className={`${sectionClass}__title`}>{title}</h1>
                <p className={`${sectionClass}__text`}>{text}</p>
            </div>
            <div className={`${sectionClass}__wrapper`}>
                <img className={`${sectionClass}__illustration`} src={src} alt={alt} />
            </div>
        </section>
    )
}