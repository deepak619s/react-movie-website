import { NavLink } from "react-router-dom";

export const Header = () => {
    const getActiveClass = ({ isActive }) => 
        isActive ? "nav-link active-link" : "nav-link";

    return (
        <>
            {/* ========== Start Header Section ========== */}
            <header className="section-navbar">
                <section className="top_txt">
                    <div className="head container">
                        <div className="head_txt">
                            <p>Free shipping, 30-day return or refund guarantee.</p>
                        </div>
                        <div className="sign_in_up">
                            <NavLink to="#" className="nav-link">SIGN IN</NavLink>
                            <NavLink to="#" className="nav-link">SIGN UP</NavLink>
                        </div>
                    </div>
                </section>

                <div className="container">
                    <div className="navbar-brand">
                        <NavLink to="/">
                            <h3>My MoviesHub</h3>
                        </NavLink>
                    </div>

                    <nav className="navbar">
                        <ul>
                            <li className="nav-item">
                                <NavLink to="/" className={getActiveClass}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className={getActiveClass}>About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/movie" className={getActiveClass}>Movies</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className={getActiveClass}>Contact</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            {/* ========== End Header Section ========== */}
        </>
    );
};
