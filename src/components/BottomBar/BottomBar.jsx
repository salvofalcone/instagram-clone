import "./index.css"

import {
  HomeIcon,
  SearchIcon,
  AddIcon,
  LikeStandardIcon,
  ProfileIcon,
} from "../../icons";

const BottomBar = () => {
  return (
    <div className="BottomBar">
      <HomeIcon />
      <SearchIcon />
      <AddIcon />
      <LikeStandardIcon />
      <ProfileIcon />
    </div>
  );
};

export default BottomBar;
