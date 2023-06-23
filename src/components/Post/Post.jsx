import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

import "./index.css";

import {
  DotsIcon,
  LikeIcon,
  CommentIcon,
  SendIcon,
  BookMarkIcon,
} from "../../icons";

const Post = ({ post }) => {
  const { isLike } = post;
  const [like, setLike] = useState(isLike);

  const onHandleLike = () => {
    setLike((prev) => !prev);
  };

  return (
    <article className="Post">
      {/* Top post */}
      <div className="PostInfo">
        <div className="PostInfo__Image">
          <img
            src={post?.userImage ? post?.userImage : ""}
            alt={post?.userName}
          />
        </div>

        <div className="PostInfo__Content">
          <p className="PostInfo__Username">{post?.userName}</p>
          <p className="PostInfo__Location">{post?.location}</p>
        </div>

        {/* icona con i tre punti (la classe è direttamente dentro il componente) */}
        <DotsIcon />
      </div>

      {/* contenuto post */}
      <div className="PostMain">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper">
        {post?.media?.map((media) => (
          <SwiperSlide>
            {media?.type === "image" ? (
              <img src={media?.src} alt="Post image" key={media.id}></img>
            ) : (
              <video
                src={media?.src}
                alt="Post video"
                key={media.id}
                playsInline
                muted
                autoPlay
                loop></video>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
        </div>

      {/* actions */}
      <div className="PostActions">
        <div className="PostActions__left">
          <div
            className="PostActions__left__like"
            onClick={() => onHandleLike()}>
            <LikeIcon fill={like && like ? "#FD1D1D" : "#262626"} />
          </div>

          <div className="PostActions__left__comment">
            <CommentIcon />
          </div>

          <div className="PostActions__left__send">
            <SendIcon />
          </div>
        </div>

        <div className="PostActions__right">
          <BookMarkIcon />
        </div>
      </div>

      {/* likes and comments */}
      <div className="PostsLC">
        <div className="PostsLC__top">
          <img
            src={post.comments[0].userImage}
            alt="user profile image"
            className="PostsLC__profile"
          />
          <p className="PostsLC__likes">
            Liked by{" "}
            <span className="bold">{post.likes.featuredLike.username}</span> and{" "}
            <span className="bold">{post.likes.numberOfLikes}</span> others
          </p>
        </div>

        <div className="PostsLC__bottom">
          <p className="PostsLC__description">
            <span className="bold">{post.userName}</span>{" "}
            <span>{post.description}</span>
          </p>
        </div>
      </div>
    </article>
  );
};

export default Post;
