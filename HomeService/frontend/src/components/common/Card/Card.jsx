import PropTypes from 'prop-types';
import styles from './Card.module.scss';

const Card = ({ src, alt, text }) => {
  return (
    <div className={styles.card} >
      <img className={styles.image} src={src} alt={alt} />
      <div className={styles.text}>{text}</div>
    </div>
  );
};

Card.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Card;
