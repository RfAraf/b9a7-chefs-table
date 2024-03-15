import profile from "../../assets/images/user_profile.svg";
import banner from "../../assets/images/banner.png";

const Header = () => {
  return (
    <header>
      <nav className="mt-12">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Recipe</a>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Search</a>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost text-3xl font-bold">RF Recipe</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Recipe</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Search</a>
              </li>
            </ul>
          </div>

          <div className="navbar-end">
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
            <div className="bg-[#0be58a] rounded-full ml-5 p-2">
              <img src={profile} alt="" />
            </div>
            {/* <a className="btn">Button</a> */}
          </div>
        </div>
      </nav>
      {/* banner */}
      <div className="relative ">
        <img src={banner} alt="" />
        <div className="absolute text-center w-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-5 ">
          <h1 className="text-white font-bold text-5xl">
            Discover an exceptional cooking class tailored for you!
          </h1>
          <p className="text-white">
            Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
            Database and solve 500+ coding problems to become an exceptionally
            well world-class Programmer.
          </p>
          <div className="space-x-3">
            <button className="btn bg-[#0be58a] font-bold border-none rounded-full">
              Explore Now
            </button>
            <button className="btn text-white font-bold bg-transparent rounded-full">
              Our Feedback
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
