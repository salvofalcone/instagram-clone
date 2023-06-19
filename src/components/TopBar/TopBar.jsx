import "./index.css";
import { CameraIcon, LogoIcon, MessangerIcon, IGTVIcon } from "../../icons";

const TopBar = () => {
  return (
    <div className="TopBar">
      
      <div className="TopBar__Camera">
        <CameraIcon />
      </div>

      <div className="TopBar__Logo">
        <LogoIcon />
      </div>

      <div className="TopBar__Actions">
        <IGTVIcon />
        <MessangerIcon />
      </div>
    </div>
  );
};

export default TopBar;
