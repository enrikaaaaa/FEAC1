import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Button.module.scss";

const Button = ({ className, rounded, small, large, ...props }) => {
  return (
    <button
      className={classNames(
        styles.button,
        rounded && styles.rounded,
        small && styles.small,
        large && styles.large,
        className
      )}
      {...props}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  rounded: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  children: PropTypes.node,
};

export default Button;
