import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context/foodRecipeContext";

function Navbar() {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);
  return (
    <nav className="flex justify-between items-center py-8 px-3 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0 shadow-lg ">
      <NavLink to={"/"} className="text-gray-600">
        <h2 className="text-2xl font-semibold ">Food Recipe</h2>
      </NavLink>
      <div
        className="flex flex-col lg:flex-row
      "
      >
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            placeholder="Enter Food Name"
            className="bg-white/75 p-3 lg:px-8  rounded-full outline outline-1 lg:w-95"
            value={searchParam}
            onChange={(e) => setSearchParam(e.target.value)}
          />
        </form>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full mx-auto lg:mx-3 mt-2 lg:mt-0 w-40"
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>

      <ul className="flex gap-5">
        <li>
          <NavLink
            to={"/"}
            className="text-black hover:text-red-700 duration-300"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favorites"}
            className="text-black hover:text-red-700 duration-300"
          >
            Favorities
          </NavLink>
        </li>
        <li></li>
      </ul>
    </nav>
  );
}

export default Navbar;
