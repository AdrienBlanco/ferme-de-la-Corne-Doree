import { Link } from "react-router-dom"

export default function NavBar({name, path}) {
    return (
        <li><Link to={path}>{name}</Link></li>
    )
};
