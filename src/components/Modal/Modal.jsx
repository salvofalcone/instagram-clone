import React from "react";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import "./index.css";

function Modal({ stories, isOpen, closeModal, index }) {
  const [start, setStart] = useState(false);
  useEffect(() => {
    setStart(index);
  }, [index]);

  let actualUser = stories.find((el) => el.id == index + 1);

  return (
    <div className={`${isOpen ? "open" : ""} Modal`}>
      <div className="Modal__Close" onClick={() => closeModal()}>
        x
      </div>

      <Swiper initialSlide={index} spaceBetween={0}>
        {stories &&
          stories?.map((userStories) => (
            <SwiperSlide key={userStories?.id}>
              <div className="Modal__User">
                <div className="Modal__User__Image">
                  <img src={userStories?.userImage} alt="" />
                </div>
                <div className="Modal__UserName">{userStories?.username}</div>
              </div>
              <Swiper
                modules={[Pagination]}
                pagination={{
                  type: "progressbar",
                }}>
                {userStories?.stories?.map((story) => (
                  <SwiperSlide key={story?.id}>
                    {story?.type === "image" ? (
                      <img src={story?.src}></img>
                    ) : (
                      <video
                        src={story?.src}
                        playsInline
                        muted
                        autoPlay
                        loop></video>
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default Modal;
