//import link
import Link from 'next/link'

function Navbar(){
    return(
        <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark fixed-top border-0 shadow-sm">
                <div className="container">
                    <Link href='/'>
                        <a className="navbar-brand"> Laravel X NextJS</a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label='Toggle navigation'>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <Link href='/posts'> <a className="nav-link">POST</a></Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input type="search" className="form-control me-2"  placeholder='search' aria-label='Search'/>
                            <button className="btn btn-success" type='submit'>Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar