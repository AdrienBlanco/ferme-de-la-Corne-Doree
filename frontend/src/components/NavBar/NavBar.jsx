// import { Link } from 'react-router-dom';

export default function NavBar({name, path}) {
    return (
        <li><a href={path}>{name}</a></li>
    )
};
