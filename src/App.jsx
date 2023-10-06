import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import Sstc from "./assets/sstc.png";
import sideimg from "../public/sideimg.png";
import Testimage from "./assets/testseriesimg.jpg";

const Slider = () => {
  const slideRef = useRef(null);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const handleClickNext = () => {
    let items = slideRef.current.querySelectorAll(".item");
    slideRef.current.appendChild(items[0]);
  };

  const handleClickPrev = () => {
    let items = slideRef.current.querySelectorAll(".item");
    slideRef.current.prepend(items[items.length - 1]);
  };

  const data = [
    {
      id: 1,
      imgUrl:
        "https://i.postimg.cc/RVm59Gqy/pexels-roberto-nickson-2559941.jpg",
      desc: "Some beautiful roads cannot be discovered without getting lost.",
      name: "CAREER",
    },
    {
      id: 2,
      imgUrl: Sstc,
      desc: "The Computer Science & Engineering Department welcomes you",
      name: "SSTC",
    },
    {
      id: 3,
      imgUrl:
        "https://i.postimg.cc/bw6KxhLf/pexels-eberhard-grossgasteiger-1062249.jpg",
      desc: "Some beautiful roads cannot be discovered without getting lost.",
      name: "FACULTY",
    },
    {
      id: 4,
      imgUrl: Testimage,
      desc: "Some beautiful roads cannot be discovered without getting lost.",
      name: "ONLINE TEST SERIES",
    },
    {
      id: 5,
      imgUrl: "https://i.postimg.cc/6qdkn4bM/pexels-joyston-judah-933054.jpg",
      desc: "Some beautiful roads cannot be discovered without getting lost.",
      name: "CAMPUS",
    },
  ];

  return (
    <div style={{ display: "flex" }}>
      <div className="container">
        <div className="loadbar" style={{ width: `${loadingProgress}%` }}></div>
        <div id="slide" ref={slideRef}>
          {data.map((item) => (
            <div
              key={item.id}
              className="item"
              style={{ backgroundImage: `url(${item.imgUrl})` }}
            >
              {" "}
              <span className="smalldes">{item.name}</span>
              <div className="content">
                <div className="name">{item.name}</div>
                <div className="des">{item.desc}</div>
                <button
                  style={{ backgroundColor: "transparent", color: "white" }}
                >
                  See more...
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="buttons">
          <button id="prev" onClick={handleClickPrev}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button id="next" onClick={handleClickNext}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
      
      <div style={{ marginTop: "98vh" }}>
        <text style={{ color: "#242526", fontSize: 18, marginLeft: "1vw" }}>
          Software | Technology | Excellence
        </text>
        {/* <img src={sideimg} alt=""
          style={{
            marginLeft: 80,
          }}
        /> */}
      </div>
    </div>
  );
};

export default Slider;
