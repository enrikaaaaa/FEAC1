import PropTypes from "prop-types";
import styles from "./Avatar.module.scss";

const Avatar = ({ user }) => {
  if (!user || !user.Name) {
    return null;
  }

  const initials = user.Name.charAt(0).toUpperCase();

  return <div className={styles.avatar}>{initials}</div>;
};

Avatar.propTypes = {
  user: PropTypes.shape({
    Name: PropTypes.string.isRequired,
  }),
};

export default Avatar;
