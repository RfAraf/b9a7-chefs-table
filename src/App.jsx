import { ToastContainer } from "react-toastify";
import "./App.css";
import Header from "./Components/Header/Header";
import Recipes from "./Components/Recipes/Recipes";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Header></Header>
      <Recipes></Recipes>
      <ToastContainer />
    </>
  );
}

export default App;
