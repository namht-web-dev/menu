const Category = ({ category, categoryId, filterCategory }) => {
  const selectedId = categoryId === category;
  return (
    <button
      type="button"
      className={`btn ${selectedId ? "btn-hipster" : ""}`}
      onClick={() => filterCategory(category)}
    >
      {category}
    </button>
  );
};
export default Category;
