import { getAllCategoriesData } from "../../data/categoriesData";
import { TCategory } from "../../types/types.global";
import CategoriesCard from "../../utils/CategoriesCard";


const Categories = () => {
  const categories = getAllCategoriesData();

  return (
    <div className=" mt-10">
      <h1 className="text-3xl hind-siliguri-bold text-center">
        নোটস একাডেমি ভল্ট
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto max-w-6xl mt-8">
        {categories.map((category: TCategory) => (
          <CategoriesCard category={category} key={category.id} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
