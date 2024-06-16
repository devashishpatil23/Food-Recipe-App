import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState(() => {
    const savedRecipes = sessionStorage.getItem("recipeList");
    return savedRecipes ? JSON.parse(savedRecipes) : [];
  });
  const [recipeDetailsData, setRecipeDetailsData] = useState([]);
  const [favoritiesList, setFavoritiesList] = useState(() => {
    const savedFavorites = sessionStorage.getItem("favoritiesList");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.setItem("recipeList", JSON.stringify(recipeList));
  }, [recipeList]);

  useEffect(() => {
    sessionStorage.setItem("favoritiesList", JSON.stringify(favoritiesList));
  }, [favoritiesList]);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const resp = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const data = await resp.json();
      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setSearchParam("");
        navigate("/");
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  function handleAddToFavorities(currentItem) {
    let cpyFavoritiesList = [...favoritiesList];
    const itemIndex = cpyFavoritiesList.findIndex(
      (item) => item.id === currentItem.id
    );
    if (itemIndex === -1) {
      cpyFavoritiesList.push(currentItem);
    } else {
      cpyFavoritiesList.splice(itemIndex, 1);
    }
    setFavoritiesList(cpyFavoritiesList);
  }

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        loading,
        recipeList,
        setSearchParam,
        handleSubmit,
        recipeDetailsData,
        setRecipeDetailsData,
        handleAddToFavorities,
        favoritiesList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
