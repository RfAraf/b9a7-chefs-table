import Cart from "../Cart/Cart";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {
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
        <div className="col-span-7 flex gap-5 ">
          <Recipe></Recipe>
          <Recipe></Recipe>
        </div>
        {/* right portion */}
        <div className="col-span-5 ">
          <Cart></Cart>
        </div>
      </div>
    </section>
  );
};

export default Recipes;
