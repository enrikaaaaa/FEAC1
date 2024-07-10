import React from "react";
import styles from "./Avatar.module.scss";

interface AvatarProps {
  user?: {
    name: string;
  };
}

const Avatar = ({ user }: AvatarProps) => {
  if (!user || !user.name) {
    return null;
  }

  const initials = user.name.charAt(0).toUpperCase();

  return <div className={styles.avatar}>{initials}</div>;
};

export default Avatar;
