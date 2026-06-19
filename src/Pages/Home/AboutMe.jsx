import './AboutMe.css';

export function AboutMe () {
    return(
        <section id='about' className='about-me'>
            <div className="container">
                <div className="about-img">
                    <img src='./img/about-me.png' />
                </div>

                <div className="about-content">
                    <div className="about-header">
                        <h3 className="about-title">
                            About
                        </h3>
                        <h1 className="about-description">About Me</h1>
                    </div>
                    <div className="about-info">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque repellendus earum inventore quidem voluptas magni nostrum, voluptatum in perferendis dolores cum ut facere non? Debitis minima ipsam laudantium quasi non?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, amet quidem. Architecto accusantium maiores recusandae.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}