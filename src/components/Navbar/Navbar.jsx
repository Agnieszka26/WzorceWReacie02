import {useLocation} from "react-router-dom";
import {BiCameraMovie} from "react-icons/bi";
import {FaHome} from "react-icons/fa";
import {MdOutlinePlace} from "react-icons/md";
import {DesktopNavItem, MobileNavItem} from "../NavItem/NavItem";
import Params from "../params/params";
import useMobile from "../useMobile";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const {verticalMenu, verticalMenu__center, active} = styles;
  const {movies, places, app} = Params;
  const location = useLocation();

  return (
    <>
      <div className={verticalMenu}>
        <div className={verticalMenu__center}>
          <div className={location.pathname === app ? active : ""}>
            {useMobile() ? (
              <DesktopNavItem icon={<FaHome />} text="Home" to={app} />
            ) : (
              <MobileNavItem icon={<FaHome />} to={app} />
            )}
          </div>
          <div className={location.pathname === movies ? active : ""}>
            {useMobile() ? (
              <DesktopNavItem
                icon={<BiCameraMovie />}
                text="Movies"
                to={Params.movies}
              />
            ) : (
              <MobileNavItem icon={<BiCameraMovie />} to={movies} />
            )}
          </div>
          <div className={location.pathname === places ? active : ""}>
            {useMobile() ? (
              <DesktopNavItem
                icon={<MdOutlinePlace />}
                text="Places"
                to={places}
              />
            ) : (
              <MobileNavItem icon={<MdOutlinePlace />} to={places} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
