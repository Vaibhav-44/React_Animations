import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import Sstc from "./assets/sstc.png";
import sideimg from "../public/sideimg.png";
import Testimage from "./assets/testseriesimg.jpg";
import white from "../public/white.jpg";
import grey from "../public/grey.jpg";

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
      name: "WELCOME TO SSTC",
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
    <div style={{ display: "inherit" }}>
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
      <div height={"95vh"} width={"100vw"}>
        <img className="white" src={white} />
      </div>
      <br />
      <span
        className="custom-margin"
        style={{
          color: "#242526",
          fontSize: 18,
        }}
      >
        Software | Technology | Excellence
      </span>
      <br />
      <br />

      <div style={{ width: "50vw", marginLeft: "25px", flexDirection: "row" }}>
        <span
          style={{
            color: "#000000",
            fontSize: "30px",
            fontWeight: "bold",
          }}
        >
          Welcome To Computer Science and Engineering Department of SSTC
        </span>
      </div>
      <br />
      <br />
      <div className="info2">
        <div style={{ padding: "28px" }}>
          <text className="info2-text">
            The department of Computer Science and Engineering at the Shri
            shankaracharya technical campus promotes innovation-centric
            education and performs cutting-edge research. The department
            continuously endeavors to create and sustain an academic environment
            conducive to the highest level of research and teaching. The goal is
            to develop human resources with sound knowledge of theoretical,
            systems, and application aspects of Computer Science & Engineering.
            The department also facilitates the development of academia-industry
            collaborations and societal outreach activities.
          </text>
        </div>
      </div>
      
    </div>
  );
};

export default Slider;
