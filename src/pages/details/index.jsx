import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context/foodRecipeContext";

function Details() {
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    handleAddToFavorities,
    favoritiesList,
  } = useContext(GlobalContext);
  const { id } = useParams();

  async function getRecipeDetails() {
    const resp = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    const data = await resp.json();
    if (data?.data) {
      setRecipeDetailsData(data?.data);
    }
    console.log(recipeDetailsData);
  }
  useEffect(() => {
    getRecipeDetails();
  }, [id]);

  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-5">
      <div className="lg:row-start-auto">
        <div className=" lg:h-96 overflow-hidden rounded-xl group">
          <img
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
            src={recipeDetailsData?.recipe?.image_url}
            alt="Food Img"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between p-2">
          <div>
            <span className="text-sm text-cyan-700 font-medium">
              {recipeDetailsData?.recipe?.publisher}
            </span>
            <h3 className="text-2xl text-black font-bold truncate">
              {recipeDetailsData?.recipe?.title}
            </h3>
          </div>
          <button
            className="text-sm p-2 px-6 rounded-lg  font-medium tracking-wider inline-block shadow-md bg-gray-600 text-white mt-3 w-48"
            onClick={() => handleAddToFavorities(recipeDetailsData?.recipe)}
          >
            {favoritiesList.findIndex(
              (item) => item.id === recipeDetailsData?.recipe?.id
            ) !== -1
              ? "Remove From Favorities"
              : "Add To favorities"}
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-3  p-3">
        <div>
          <span className="text-3xl font-semibold">Ingredients:</span>
          <ul className="flex flex-col gap-3 text-2xl font-semibold mt-2">
            {recipeDetailsData?.recipe?.ingredients.map((ingredient, i) => (
              <li key={i}>
                <span>
                  {" "}
                  {ingredient.quantity} {ingredient.unit}
                </span>
                <span> {ingredient.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Details;
