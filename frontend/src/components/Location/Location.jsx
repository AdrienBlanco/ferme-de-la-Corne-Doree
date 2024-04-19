/* eslint-disable jsx-a11y/iframe-has-title */
import "./Location.scss";

export default function Location({ infoTitle, info, src, width, height, loadingValue }) {
    return (
        <div className="location" id="location">
            <h2 className="location__title">Coordonnées</h2>
            <div className="location__map">
                <iframe src={src} width={width} height={height} loading={loadingValue}></iframe>
            </div>
            <div className="location__content">
                {infoTitle.map((title, index) =>
                    <p key={index}><span>{title}</span> {info[index]}</p>
                )}
            </div>
            
        </div>
    )
}