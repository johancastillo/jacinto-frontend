


const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand">Navbar</span>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <span className="nav-link active">Inicio</span>
                        </li>

                        <li className="nav-item">
                            <span className="nav-link">Nosotros</span>
                        </li>

                        <li className="nav-item">
                            <span className="nav-link">Iniciar sesión</span>
                        </li>

                        <li className="nav-item">
                            <span className="nav-link">Register</span>
                        </li>
                       
                    </ul>
                </div>
            </div>
        </nav>

    )
};


export default Navigation;



