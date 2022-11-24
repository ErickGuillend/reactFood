const Navbar = () => {
    return (
        <div class="navbar">
        <span className="logo">  Erick App </span>
        <ul className="list">
            <li className="listItem">
                <img src="https://cdn.pixabay.com/photo/2021/08/11/17/50/wolf-6539083_960_720.png" alt="" className="avatar" />
            </li>
            <li className="listItem"> Jhon Doe </li>
            <li className="listItem">Logout</li>
        </ul>
        </div>
    )
}

export default Navbar;