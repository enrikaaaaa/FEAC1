import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./UrlIcon.module.scss";

const UrlIcon = ({ url, className, style = {} }) => {
  return (
    <img
      src={url}
      className={classNames(styles.icon, className)}
      style={style}
      alt="Icon"
    />
  );
};

UrlIcon.propTypes = {
  url: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default UrlIcon;
