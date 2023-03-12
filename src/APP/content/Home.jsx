const Home = () => {
    return (
        <section className="home">
            <div className="home__shape-small"></div>
            <div className="home__shape-big"></div>
            <img src="assets/img/shape-bg.png" alt="shape image" className="home__shape-bg" />
            <div className="home__container container">
                <div className="home__data">
                    <h1 className="home__title">
                        Get Fresh
                        <span>Juiceables</span>
                        Everyday
                    </h1>
                    <p className="home__description">
                        Starting at $360 per month, get <br />
                        those benefits and more.
                    </p>
                    <a href="#" className="home__button">
                        Details
                    </a>
                </div>
                <div className="home__images">
                    <img src="assets/img/liquid-fruit.png" alt="liquid image" className="home__liquid" />
                    <div className="home__juice-animate">
                        <img src="assets/img/juice.png" alt="juice image" className="home__juice" />
                    </div>
                    <img src="assets/img/apple1.png" alt="apple image" className="home__apple1" />
                    <img src="assets/img/apple2.png" alt="apple image" className="home__apple2" />
                    <div>
                        <img src="assets/img/leaf.png" alt="leaf image" className="home__leaf" />
                        <img src="assets/img/leaf.png" alt="leaf image" className="home__leaf" />
                        <img src="assets/img/leaf.png" alt="leaf image" className="home__leaf" />
                        <img src="assets/img/leaf.png" alt="leaf image" className="home__leaf" />
                        <img src="assets/img/leaf.png" alt="leaf image" className="home__leaf" />
                        <img src="assets/img/leaf.png" alt="leaf image" className="home__leaf" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Home };
