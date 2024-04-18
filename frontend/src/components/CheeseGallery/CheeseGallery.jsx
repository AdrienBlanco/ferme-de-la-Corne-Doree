import Card from "../Card/Card";
import cheeseGallery from "../../datas/cheeses.json";
import './CheeseGallery.scss';

export default function CheeseGallery({ src, alt, caption }) {

    return (
        <div className="CheeseGallery waveBg">
            <div className="CheeseGallery__container">
                <div className="CheeseGallery__title title-container">
                    <h2>Nos Fromages de Chèvre</h2>
                    <div className="highlight"></div>
                </div>
                <div className="CheeseGallery__Cards">
                    {cheeseGallery.map((item, idx) => (
                        <Card
                            key={idx}
                            src={item.src}
                            alt={item.alt}
                            caption={item.caption}
                        />
                    ))
                    }
                </div>
            </div>
        </div>
    )
}