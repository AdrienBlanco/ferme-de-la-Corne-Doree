import "./TextAndImage.scss";

export default function TextAndImage({ sectionClass, title, text, src, alt, reverse}) {

    const reverseSection = `${sectionClass} ${reverse ? `${sectionClass}--reverse` : ''}`;
    const alignEndTitle = `${sectionClass}__title ${reverse ? `${sectionClass}__title--align-end` : ''}`;

    return (
        <section className={`${reverseSection}`}>
            <div className={`${sectionClass}__content`}>
                <h2 className={`${alignEndTitle}`}>{title}</h2>
                <p className={`${sectionClass}__text`}>{text}</p>
            </div>
            <div className={`${sectionClass}__wrapper`}>
                <img className={`${sectionClass}__illustration`} src={src} alt={alt} />
            </div>
        </section>
    )
}