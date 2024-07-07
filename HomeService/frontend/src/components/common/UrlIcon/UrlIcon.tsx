import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";
import styles from "./UrlIcon.module.scss";

interface UrlIconProps {
  url: string;
  className?: string;
  style?: React.CSSProperties;
}

const UrlIcon = ({ url, className, style = {} }: UrlIconProps) => {
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
