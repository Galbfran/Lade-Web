import Link from "next/link"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" href="">LADE</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="#">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <p className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Institucional
                            </p>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Recorrido Historico</a></li>
                                <li><a className="dropdown-item" href="#">Responsabilidad Social</a></li>
                                <li><a className="dropdown-item" href="#">Material de Vuelo</a></li>
                                <li><a className="dropdown-item" href="#">Informacion Legal</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <p className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Servicios
                            </p>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" href="#">LADE Catering</Link></li>
                                <li><Link className="dropdown-item" href="#">LADE Cargas</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <p className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Delegaciones
                            </p>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" href="#">Ubicacion en el Mapa</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <p className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Informacion
                            </p>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" href="#">Informacion General</Link></li>
                                <li><Link className="dropdown-item" href="#">Covid - 19</Link></li>
                                <li><Link className="dropdown-item" href="#">Preguntas Frecuentes</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link className="nav-link active" aria-current="page" href='#'>Destinos</Link>
                        </li>
                        <li>
                            <Link className="nav-link active" aria-current="page" href='#'>Contacto</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar