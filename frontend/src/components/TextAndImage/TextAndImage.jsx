import "./TextAndImage.scss";

export default function TextAndImage({ sectionClass, title, text, src, alt, reverse, wave }) {

    const reverseSection = `${sectionClass} ${reverse ? `${sectionClass}--reverse` : ''}`;
    const alignEndTitle = `${sectionClass}__title ${reverse ? `${sectionClass}__title--align-end` : ''}`;
    const waveSection = `${sectionClass} ${wave ? `waveBg` : ''}`;

    return (
        <section className={`${waveSection}`}>
            <div className={`${reverseSection} ${sectionClass}__container`}>
                <div className={`${sectionClass}__content`}>
                    <div className={`${alignEndTitle} title-container`}>
                        <h2>{title}</h2>
                        <div className="highlight"></div>
                    </div>
                    <p className={`${sectionClass}__text`}>{text}</p>
                </div>
                <div className={`${sectionClass}__wrapper`}>
                    <img className={`${sectionClass}__illustration`} src={src} alt={alt} />
                </div>
            </div>
        </section>
    )
}