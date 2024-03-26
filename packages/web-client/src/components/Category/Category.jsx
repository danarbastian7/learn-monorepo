import React from "react";
import CategoryCard from "./CategoryCard";
import data from "./CategoryProduct.json";

const Category = () => {
  return (
    <div className="container pt-16">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((category) => (
          <CategoryCard
            key={category.id}
            img={category.img}
            name={category.name}
            count={category.count}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
