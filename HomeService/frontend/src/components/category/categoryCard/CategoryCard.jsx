import { generatePath, useNavigate, useParams } from "react-router-dom";

import PropTypes from "prop-types";
import { ROUTES } from "@/routes/consts";
import UrlIcon from "@/components/common/UrlIcon/UrlIcon";
import classNames from "classnames";
import styles from "./CategoryCard.module.scss";

const CategoryCard = ({ category, className }) => {
  const params = useParams();
  const { name, url } = category;
  const navigate = useNavigate();

  const categoryPath = generatePath(ROUTES.SEARCH_CATEGORY, { category: name });
  const activeCategory = params.category;

  return (
    <div
      className={classNames(
        styles.card,
        activeCategory === name && styles.active,
        className
      )}
      onClick={() => navigate(categoryPath)}
    >
      <UrlIcon url={url} style={{ width: 48, height: 48 }} />
      <p>{name}</p>
    </div>
  );
};

CategoryCard.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
  className: PropTypes.string,
};

export default CategoryCard;
