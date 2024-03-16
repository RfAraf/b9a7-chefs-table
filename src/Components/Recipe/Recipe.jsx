/* eslint-disable react/prop-types */
import time from "../../assets/images/time.svg";
import fire from "../../assets/images/calories.svg";

const Recipe = ({ recipe, handleCook }) => {
  const {
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
    recipe_image,
  } = recipe;
  return (
    <div>
      {/* card-1 */}
      <div className="card bg-base-100 shadow-xl border">
        <figure className="px-6 py-6">
          <img src={recipe_image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body p-0 px-6 pb-6 ">
          <h2 className="card-title font-semibold text-xl">{recipe_name}</h2>
          <p className="text-[#878787] font-fira">{short_description}</p>
          <hr />
          <div className="space-y-3">
            <h3 className="font-semibold">Ingredients: 5</h3>
            <ul className="text-[#878787] space-y-2 list-disc pl-4 font-fira">
              {ingredients.map((ingredient, idx) => (
                <li key={idx}>{ingredient}</li>
              ))}
            </ul>
            <hr />
            <div className="flex justify-between">
              <div className="flex gap-3">
                <div>
                  <img src={time} alt="" />
                </div>
                <p className="text-[#282828CC] font-fira">
                  {preparing_time} minutes
                </p>
              </div>
              <div className="flex gap-3">
                <div>
                  <img src={fire} alt="" />
                </div>
                <p className="text-[#282828CC] font-fira">
                  {calories} calories
                </p>
              </div>
            </div>
          </div>
          <div className="card-actions mt-3">
            <button
              onClick={() => handleCook(recipe)}
              className="btn bg-[#0be58a] font-bold border-none rounded-full"
            >
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;

{
  /* <li>500g ground beef</li>
              <li>1 onion, chopped</li>
              <li>2 cloves garlic, minced</li> */
}
