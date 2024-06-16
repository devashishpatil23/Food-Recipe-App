import { useContext } from "react";
import { GlobalContext } from "../../context/foodRecipeContext";
import RecipeItem from "../../components/recepiList/RecipeItem";

function Favorites() {
  const { favoritiesList } = useContext(GlobalContext);
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favoritiesList && favoritiesList.length > 0 ? (
        favoritiesList.map((item, i) => <RecipeItem key={i} item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing is added in favorities
          </p>
        </div>
      )}
    </div>
  );
}

export default Favorites;
