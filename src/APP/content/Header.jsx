const Header = () => {
    return (
        <header className="header" id="header">
            <nav className="nav container">
                <a href="#" className="nav__logo">
                    Juice<span>ables</span>
                </a>
                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#" className="nav__link active-link">
                                Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">
                                About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">
                                Services
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">
                                Contact
                            </a>
                        </li>
                    </ul>
                    <div className="nav__close" id="nav-close">
                        <i className="ri-close-line"></i>
                    </div>
                    <img
                        src="assets/img/nav-img.png"
                        alt="nav image"
                        className="nav__img"
                    />
                </div>

                <div className="nav__toggle" id="nav-toggle">
                    <i className="ri-menu-line"></i>
                </div>
            </nav>
        </header>
    );
};

export { Header };
