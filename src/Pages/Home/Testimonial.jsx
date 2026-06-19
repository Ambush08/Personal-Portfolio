import "./Testimonial.css";

export function Testimonial() {
  return (
    <section id="testimonies" className="testimonie">
      <div className="container testimonie-container">
        <div className="testimonie-header">
          <h3 className="testimonie-title">Testimonials</h3>
          <h2 className="client-testimonie">Customer Feedback</h2>
        </div>

        <div className="testimonie-content">
          <div className="testimonie-card">
            <div className="client-rating">
              <ul className="rating-list">
                <li>
                  <i class="fa-solid fa-star"></i>
                </li>
                <li>
                  <i class="fa-solid fa-star"></i>
                </li>
                <li>
                  <i class="fa-solid fa-star"></i>
                </li>
                <li>
                  <i class="fa-solid fa-star"></i>
                </li>
                <li>
                  <i class="fa-solid fa-star"></i>
                </li>
              </ul>
            </div>
            <div className="client-remarks">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
                quod ab aspernatur?
              </p>
            </div>
            <div className="client-profile">
              <div className="client-image">
                <img src="./img/avatar-image.png" />
              </div>
              <div className="client-details">
                <p className="client-name">Daniel Russel</p>
                <p className="client-company">Starbuck</p>
              </div>
            </div>
          </div>

          <div className="testimonie-card">
            <div className="client-rating">
              <ul className="rating-list">
                <li>
                  <i class="fa-solid fa-star"></i>
                </li>
                <li>
                  <i class="fa-solid fa-star"></i>
                </li>
                <li>
                  <i class="fa-solid fa-star"></i>
                </li>
                <li>
                  <i class="fa-solid fa-star"></i>
                </li>
                <li>
                  <i class="fa-solid fa-star"></i>
                </li>
              </ul>
            </div>
            <div className="client-remarks">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
                quod ab aspernatur?
              </p>
            </div>
            <div className="client-profile">
              <div className="client-image">
                <img src="./img/avatar-image-2.png" />
              </div>
              <div className="client-details">
                <p className="client-name">Kristin Watson</p>
                <p className="client-company">Louis Vuitton</p>
              </div>
            </div>
          </div>

          <div className="testimonie-card">
            <div className="client-rating">
              <ul className="rating-list">
                <li>
                  <i class="fa-solid fa-star"></i>
                </li>
                <li>
                  <i class="fa-solid fa-star"></i>
                </li>
                <li>
                  <i class="fa-solid fa-star"></i>
                </li>
                <li>
                  <i class="fa-solid fa-star"></i>
                </li>
                <li>
                  <i class="fa-solid fa-star"></i>
                </li>
              </ul>
            </div>
            <div className="client-remarks">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
                quod ab aspernatur?
              </p>
            </div>
            <div className="client-profile">
              <div className="client-image">
                <img src="./img/avatar-image-1.png" />
              </div>
              <div className="client-details">
                <p className="client-name">Kathryn Murphy</p>
                <p className="client-company">Starbuck</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
