import "./index.css";

import { DotsIcon, LikeIcon, CommentIcon, SendIcon, BookMarkIcon } from "../../icons";

const Post = ({ post }) => {
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
        {post?.media?.map((media) => (
          <img src={media?.src} alt="Post image" key={media.id}></img>
        ))}
      </div>

      {/* like + actions + commenti */}
      <div className="PostActions">
        <div className="PostActions__left">
          <LikeIcon />
          <CommentIcon />
          <SendIcon />
        </div>

        <div className="PostActions__right">
          <BookMarkIcon />
        </div>
      </div>
    </article>
  );
};

export default Post;
