import { useContext } from "react";
import { GlobalContext } from "../../context/foodRecipeContext";
import RecipeItem from "../../components/recepiList/RecipeItem";

function Home() {
  const { recipeList, loading } = useContext(GlobalContext);
  if (loading)
    return (
      <div className="text-center mt-3">Loading data please wait...! </div>
    );
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem key={item.id} item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing to show please search somthing else!
          </p>
        </div>
      )}
    </div>
  );
}

export default Home;
