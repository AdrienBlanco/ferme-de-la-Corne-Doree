export default function NavBar({name, path, target, aria}) {
    return (
        <li><a href={path} target={target}>{name}</a></li>
    )
};
