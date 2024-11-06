import React from "react";

function Hero() {
  return (
    <div className="container border-bottom mt-5 text-center">
      <h1 >Technology</h1>
      <h3 className="text-muted mt-3 fs-4">
        Sleek, modern and intuitive trading platforms
      </h3>
      <p className="mt-3 mb-5">
        Check out our
        <a href="" style={{ textDecoration: "none" }}>
          investment offerings
          <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
        </a>
      </p>
    </div>
  );
}

export default Hero;