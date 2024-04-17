import Card from "../Card/Card";
import cheeseGallery from "../../datas/cheeses.json";
import './CheeseGallery.scss';

export default function CheeseGallery({ src, alt, caption }) {

    return (
        <div className="CheeseGallery waveBg">
            <div className="CheeseGallery__container">
                <h2 className="CheeseGallery__title">Nos Fromages de Chèvre</h2>
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