import "./index.css";

import {
  HomeIcon,
  SearchIcon,
  AddIcon,
  LikeStandardIcon,
  ProfileIcon,
} from "../../icons";

const BottomBar = ({ setSection }) => {
  const onHandleClick = (sectionName) => setSection(sectionName);

  return (
    <div className="BottomBar">
      <HomeIcon />
      <SearchIcon />
      <AddIcon />
      <LikeStandardIcon />

      <div className="profileSection" onClick={() => onHandleClick("profile")}>
        <ProfileIcon />
      </div>
    </div>
  );
};

export default BottomBar;
