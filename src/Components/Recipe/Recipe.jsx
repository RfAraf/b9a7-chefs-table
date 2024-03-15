import food from "../../assets/images/food.png";
import time from "../../assets/images/time.svg";
import calories from "../../assets/images/calories.svg";

const Recipe = () => {
  return (
    <div>
      {/* card-1 */}
      <div className="card bg-base-100 shadow-xl border">
        <figure className="px-6 py-6">
          <img src={food} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body p-0 px-6 pb-6 ">
          <h2 className="card-title font-semibold text-xl">
            Spaghetti Bolognese
          </h2>
          <p className="text-[#878787] font-fira">
            Classic Italian pasta dish with savory meat sauce.
          </p>
          <hr />
          <div className="space-y-3">
            <h3 className="font-semibold">Ingredients: 1</h3>
            <ul className="text-[#878787] space-y-2 list-disc pl-4 font-fira">
              <li>500g ground beef</li>
              <li>1 onion, chopped</li>
              <li>2 cloves garlic, minced</li>
            </ul>
            <hr />
            <div className="flex justify-between">
              <div className="flex gap-3">
                <div>
                  <img src={time} alt="" />
                </div>
                <p className="text-[#282828CC] font-fira">30 minutes</p>
              </div>
              <div className="flex gap-3">
                <div>
                  <img src={calories} alt="" />
                </div>
                <p className="text-[#282828CC] font-fira">600 calories</p>
              </div>
            </div>
          </div>
          <div className="card-actions mt-3">
            <button className="btn bg-[#0be58a] font-bold border-none rounded-full">
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
