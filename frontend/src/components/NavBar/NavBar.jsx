import { Link } from "react-router-dom"

export default function NavBar({name, path, target}) {
    return (
        <li><Link to={path} target={target}>{name}</Link></li>
    )
};
