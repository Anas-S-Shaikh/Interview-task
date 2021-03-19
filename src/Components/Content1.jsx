import React from "react";
import img1 from "../assets/img1.jpg";
const Content1 = () => {
  return (
    <div className="content_main">
      <div className="container">
        <div className="content_container">
          <h1>
            A library for <span>change </span>
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio,
            explicabo repudiandae voluptas et rem, aspernatur excepturi ab
            consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, nam?
          </p>
        </div>
        <div className="img_container">
          <img src={img1} alt="library" />
        </div>
      </div>
    </div>
  );
};

export default Content1;
