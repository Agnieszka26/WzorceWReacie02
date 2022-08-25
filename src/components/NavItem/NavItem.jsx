import styles from "./NavItem.module.css";

const DesktopNavItem = ({icon, text, to}) => {
  return (
    <a href={to} className={styles.lovely_item}>
      <span> {icon} </span>
      <span> {text} </span>
    </a>
  );
};

const MobileNavItem = ({icon, to}) => {
  return (
    <a href={to} className={styles.lovely_item}>
      {icon}
    </a>
  );
};

export {DesktopNavItem, MobileNavItem};
