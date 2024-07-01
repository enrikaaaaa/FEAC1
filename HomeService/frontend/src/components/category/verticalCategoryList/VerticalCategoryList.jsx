import CategoryCard from "@/components/category/categoryCard/CategoryCard";
import styles from "./VerticalCategoryList.module.scss";
import { useCategories } from "@/components/category/hooks";

const VerticalCategoryList = () => {
  const { data: categories } = useCategories();

  return (
    <div className={styles.categoryList}>
      <h2 className={styles.title}>Categories</h2>
      {categories?.map((category) => (
        <CategoryCard key={category.name} category={category} className={styles.card} />
      ))}
    </div>
  );
};

export default VerticalCategoryList;
