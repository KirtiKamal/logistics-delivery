import React from "react";
import { FiTruck } from "react-icons/fi";
const HomePage = () => {
  return (
    <main>
      <article>
        <section className="section hero" id="home">
          <div className="container">
            <div className="hero-content">
              <p className="hero-subtitle has-before">
                Wellcome to Our Website
              </p>

              <h1 className="h1 hero-title">
              Every Route, 
                <i> Every Moment</i> We Deliver for You.
              </h1>

              <p className="hero-text">
              DropMile offers seamless, on-time deliveries with real-time GPS tracking, optimized routes, and instant driver updates. Whether it’s a local package or large shipment, we ensure precision and reliability every step of the way.
              </p>

              <div className="btn-group">
                <a href="#" className="btn btn-primary">
                  Support More
                </a>

                <button className="flex-btn">
                  <div className="btn-icon">
                    <FiTruck />
                  </div>

                  <span className="span">How it works</span>
                </button>
              </div>
            </div>

            <figure
              className="hero-banner has-before img-holder"
              style={{ "--width": 650, "--height": 650 }}
            >
              <img
                src="/hero-banner.jpg"
                width="650"
                height="650"
                alt="hero banner"
                className="img-cover"
              />
            </figure>
          </div>
        </section>
      </article>
    </main>
  );
};

export default HomePage;
