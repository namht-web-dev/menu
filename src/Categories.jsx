import Category from "./Category";

const Categories = ({ categories, categoryId, filterCategory }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => (
        <Category
          key={category}
          category={category}
          categoryId={categoryId}
          filterCategory={filterCategory}
        />
      ))}
    </div>
  );
};
export default Categories;
