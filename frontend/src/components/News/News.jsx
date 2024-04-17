import "./News.scss"

export default function News({sectionClass, newsTitle, newsDate, newsContent}) {
  return (
    <section className={`${sectionClass}`} id="News">
        <div className={`${sectionClass}__container`}>
        <h2 className={`${sectionClass}__title`}>Nos Actualités</h2>
        <div className={`${sectionClass}__cards`}>
            {newsTitle.map((title, index) => (
                <div className={`${sectionClass}__card`} key={index}>
                    <div className={`${sectionClass}__content`}>
                        <h3 className={`${sectionClass}__content--title`}>{title}</h3>
                        <p className={`${sectionClass}__content--date`}>{newsDate[index]}</p>
                    </div>
                    <p className={`${sectionClass}__card--text`}>{newsContent[index]}</p>
                </div>
            ))}
        </div>
        </div>
    </section>
  )
}
