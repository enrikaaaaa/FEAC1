import Button from "@/components/common/Button/Button";
import PropTypes from "prop-types";
import styles from "./BusinessCard.module.scss";

const BusinessCard = ({ business }) => {
  return (
    <div className={styles.card}>
      {business.img && (
        <img
          src={business.img}
          alt={business.company}
          className={styles.image}
        />
      )}
      <div className={styles.infoContainer}>
        <span className={styles.chip}>{business.category}</span>
        <h3 className={styles.name}>{business.company}</h3>
        <p
          className={styles.contactPerson}
        >{`${business.name} ${business.lastname}`}</p>
        <p className={styles.address}>{business.address}</p>
        <Button>Book now</Button>
      </div>
    </div>
  );
};

BusinessCard.propTypes = {
  business: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }).isRequired,
};

export default BusinessCard;
