import NavBar from '../../components/NavBar/NavBar';
import './Header.scss';

export default function Header() {

    const leftNav = [
        { name: 'Accueil', path: '/' },
        { name: 'Chèvrerie', path: '/chevrerie' },
        { name: 'Centre-Equestre', path: '/centre-equestre' }
    ];

    const rightNav = [
        { name: 'Actualités', path: '#actu' },
        { name: 'Localisation', path: '#location' },
        { name: 'Contact', path: '#Contact' }
    ];

    return (
        <header>
            <nav>
                <ul className="nav__list">
                    {leftNav.map((item, index) => (
                        <NavBar
                            key={index}
                            name={item.name}
                            path={item.path}
                        />
                    ))}
                </ul>
                <div className='logo'>
                    <img
                        className="logo__img"
                        src="./img/logo_de_la_ferme_de_la_corne_doree.jpg"
                        alt="Logo de la Ferme de la Corne Dorée"
                    />
                    <h1 className="sr-only logo__main-title">Ferme de la Corne Dorée</h1>
                </div>
                <ul className="nav__list">
                    {rightNav.map((item, index) => (
                        <NavBar
                            key={index}
                            name={item.name}
                            path={item.path}
                        />
                    ))}
                </ul>
            </nav>
        </header>
    )
};