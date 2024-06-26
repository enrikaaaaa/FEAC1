import CategoryCard from "@/components/category/categoryCard/CategoryCard";
import styles from "./CategoryList.module.scss";
import { useCategories } from "@/components/category/hooks";

const CategoryList = () => {
  const { data: categories } = useCategories();

  return (
    <div className={styles.container}>
      {categories?.map((category) => (
        <CategoryCard
          key={category.name}
          category={category}
          className={styles.card}
        />
      ))}
    </div>
  );
};

export default CategoryList;
