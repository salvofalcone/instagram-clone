import "./index.css"

import {
  HomeIcon,
  SearchIcon,
  AddIcon,
  LikeIcon,
  ProfileIcon,
} from "../../icons";

const BottomBar = () => {
  return (
    <div className="BottomBar">
      <HomeIcon />
      <SearchIcon />
      <AddIcon />
      <LikeIcon />
      <ProfileIcon />
    </div>
  );
};

export default BottomBar;
