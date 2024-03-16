import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [cart, setCart] = useState([]);
  // console.log(cart);

  useEffect(() => {
    fetch("recipesData.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const handleCook = (recipe) => {
    const newCart = [...cart, recipe];
    const isExist = cart.find((item) => item.recipe_id === recipe.recipe_id);
    if (!isExist) {
      setCart(newCart);
    } else {
      toast.warn("Already exist");
    }
  };

  return (
    <section className="mt-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Our Recipes</h1>
        <p className="text-[#150B2B99] mt-6 mb-12">
          Discover culinary delights with our curated collection of recipes.{" "}
          <br /> From savory to sweet, unlock a world of flavor and inspiration
          in your kitchen.
        </p>
      </div>

      {/* recipe body */}
      <div className="grid grid-cols-12 gap-5">
        {/* left portion */}
        <div className="col-span-7 grid grid-cols-2 gap-5 ">
          {recipes.map((recipe, idx) => (
            <Recipe key={idx} recipe={recipe} handleCook={handleCook}></Recipe>
          ))}
        </div>
        {/* right portion */}
        <div className="col-span-5 ">
          <Cart cart={cart}></Cart>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Recipes;
