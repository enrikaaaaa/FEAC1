import PropTypes from "prop-types";
import styles from "./ServicesCard.module.scss";

const ServicesCard = ({ img, company, name, lastname, address, category }) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={img} alt={company} />
      <div className={styles.infoContainer}>
        <h2 className={styles.chip}>{category}</h2>
        <h3 className={styles.name}>{company}</h3>
        <p className={styles.contactPerson}>
          {name} {lastname}
        </p>
        <p className={styles.address}>{address}</p>
      </div>
    </div>
  );
};

ServicesCard.propTypes = {
  img: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default ServicesCard;
