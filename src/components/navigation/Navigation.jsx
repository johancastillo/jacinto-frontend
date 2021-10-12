


const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand">Navbar</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active">Inicio</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link">Nosotros</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link">Iniciar sesión</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link">Register</a>
                        </li>
                       
                    </ul>
                </div>
            </div>
        </nav>

    )
};


export default Navigation;



