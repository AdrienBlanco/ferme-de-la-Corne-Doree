import { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 5) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, []);

    const leftNav = [
        { name: 'Accueil', path: '/' },
        { name: 'Chèvrerie', path: '/chevrerie' },
        { name: 'Centre-Equestre', path: '/centre-equestre' }
    ];

    const rightNav = [
        { name: 'Actualités', path: '#News' },
        { name: 'Contact & Localisation', path: '#Contact' },
        { name: <FontAwesomeIcon icon={faFacebook} aria-hidden={false} title='facebook' />, path: 'https://www.facebook.com/profile.php?id=100067318896608', target: '_blank'}
    ];

    return (
        <header className={scrolled ? 'scrolled': ''}>
            <nav className={scrolled ? 'nav--scrolled': ''}>
                <ul className="nav__list nav__list--left">
                    {leftNav.map((item, index) => (
                        <NavBar
                            key={index}
                            name={item.name}
                            path={item.path}
                        />
                    ))}
                </ul>
                <div className={`logo ${scrolled ? 'logo--scrolled' : ''}`}>
                    <img
                        className="logo__img"
                        src="./img/logo_de_la_ferme_de_la_corne_doree.jpg"
                        alt="Logo de la Ferme de la Corne Dorée"
                    />
                    <h1 className="sr-only logo__main-title">Ferme de la Corne Dorée</h1>
                </div>
                <ul className="nav__list nav__list--right">
                    {rightNav.map((item, index) => (
                        <NavBar
                            key={index}
                            name={item.name}
                            path={item.path}
                            target={item.target}
                        />
                    ))}
                </ul>
            </nav>
        </header>
    )
};