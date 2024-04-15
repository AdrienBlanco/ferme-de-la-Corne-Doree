import './Card.scss';

export default function Card ( {src, alt, caption}) {
    return (
        <figure className="card">
          <img src={src} alt={alt} />
          <figcaption>{caption}</figcaption>
        </figure>
      );
}