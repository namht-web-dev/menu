import { useState } from "react";
import Categories from "./Categories";
import menu from "./data";
import Menu from "./Menu";
import Title from "./Title";
const allCategories = ["all", ...new Set(menu.map((item) => item.category))];
function App() {
  const [category, setCategory] = useState("all");
  const [menuItems, setMenuItems] = useState(menu);
  const filterCategory = (categoryId) => {
    const newId = categoryId == category ? "all" : categoryId;
    setCategory(newId);
    const newItem =
      newId === "all"
        ? menu
        : menu.filter((item) => item.category === categoryId);
    setMenuItems(newItem);
  };
  return (
    <main>
      <section className="menu">
        <Title title="our menu" />
        <Categories
          categories={allCategories}
          categoryId={category}
          filterCategory={filterCategory}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
