import { Link } from "react-router-dom";

function RecipeItem({ item }) {
  return (
    <div className="flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-white">
      <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
        <img src={item?.image_url} alt="Food Image" />
      </div>
      <div>
        <span className="text-sm text-cyan-700 font-medium">
          {item?.publisher}
          <h3 className="text-bold text-xl truncate text-black">
            {item?.title}
          </h3>
          <Link
            className="text-sm p-3 px-6 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-gray-600 text-white mt-3 "
            to={`/recipe-item/${item.id}`}
          >
            Recipe Details
          </Link>
        </span>
      </div>
    </div>
  );
}

export default RecipeItem;
