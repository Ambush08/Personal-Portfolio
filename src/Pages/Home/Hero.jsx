import './Home.css';
export function Hero (){
    return(
        <>
            <section id='hero' className='hero-section'>
                <div className="container">
                    <div className="hero-content">
                        <h3 className="hero-intro">Hey, I'm Warren</h3>
                        <h1 className="hero-title">A Full Stack <br />Developer</h1>
                        <p className="hero-info">
                            Building scalable, user-focused web applications with modern technologies.
                            <br />Helping businesses succeed through innovative full-stack web development solutions.
                        </p>
                            <button className="btn btn-primary">
                                Get in Touch
                            </button>
                    </div>

                    <div className="hero-image">
                        <img src="./img/hero_img.png"/>
                    </div>
                </div>
            </section>
        </>
    )
}