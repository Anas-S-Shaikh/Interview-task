import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import  phone  from "../assets/phone.png";
export default () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div className="slider_main">
      <h1>
        A World of Books, Talks, Meditation, and other inspiring audio
      </h1>
      <div className="phone">
          <img src={phone} alt="phone"/>
      </div>
      <div style={{ padding: `0 ${chevronWidth}px`,margin:`5% 0%` , position:'relative'}}>
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={5}
          gutter={20}
          leftChevron={<button>{"<"}</button>}
          rightChevron={<button>{">"}</button>}
          outsideChevron
          chevronWidth={chevronWidth}
          infiniteLoop
        >
          <div className='slides' style={{ background: "chartreuse" }}>First card</div>
          <div className='slides' style={{ background: "orange" }}>Second card</div>
          <div className='slides' style={{ background: "royalblue" }}>Third card</div>
          <div className='slides' style={{ background: "blue" }}>Fourth card</div>
          <div className='slides' style={{ background: "fuchsia" }}>Fifth card</div>
        </ItemsCarousel>
      </div>
    </div>
  );
};
