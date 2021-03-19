import React from "react";
import img2 from "../assets/img2.jpg";
const Content2 = () => {
  return (
    <div className="content2_main">
      <div className="container"> 
        <div className="img_container">
          <img src={img2} alt="library" />
        </div>
        <div className="content_container">
          <h1>
            Bringing physical and Digital
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio,
            explicabo repudiandae voluptas et rem, aspernatur excepturi ab
            consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, nam?
          </p>
          <button className='btn'>Library</button>
        </div>
      </div>
    </div>
  );
};

export default Content2;
