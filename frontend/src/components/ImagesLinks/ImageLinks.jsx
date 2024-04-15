import React from 'react';
import { Link } from 'react-router-dom';
import "./ImageLinks.scss";

export default function ImageLinks({sectionClass, titles, links, src, alt}) {
  return (
    <section className={sectionClass}>
        {titles.map((title, index) => (
            <div className={`${sectionClass}__content`} key={index}>
                <a className={`${sectionClass}__link`} href={links[index]}>
                    <h3 className={`${sectionClass}__title`}>{title}</h3>
                    <img className={`${sectionClass}__image`} src={src[index]} alt={alt[index]} />
                </a>
            </div>
        ))}
    </section>
  )
}
