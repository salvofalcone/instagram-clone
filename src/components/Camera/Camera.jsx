import { useState, useEffect } from "react";
import { filtersData } from "../../mocks/filters";
import "./index.css";

const Camera = () => {
  const [constraints, setConstraints] = useState({
    audio: false,
    video: { width: 600, height: 1400 },
  });

  const [filterState, setFilterState] = useState("");

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((mediaStream) => {
        const video = document.querySelector("video");

        video.srcObject = mediaStream;
        video.onloadedmetadata = () => {
          video.play();
        };
      })
      .catch((err) => {
        console.error(`${err.name}: ${err.message}`);
      });
  }, []);

  const onSetFilterState = (state) => setFilterState(state);

  return (
    <div className="Camera__Main">
      <video className={`Camera ${filterState}`}></video>

      <div className="Camera__Filters__Container">
        <ul className="Camera__Filters">
          {filtersData?.map((filter) => (
            <li
              className={filter.name}
              onClick={() => onSetFilterState(filter.name)}>
              <img src="https://picsum.photos/100" alt="preview filter" className="Camera__Filter__Preview"/>
              <p className="Camera__Filter__Name">{filter.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Camera;
