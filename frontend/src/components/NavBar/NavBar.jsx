export default function NavBar({name, path, target}) {
    return (
        <li><a href={path} target={target}>{name}</a></li>
    )
};
