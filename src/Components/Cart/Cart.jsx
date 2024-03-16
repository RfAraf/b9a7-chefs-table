/* eslint-disable react/prop-types */
const Cart = ({ cart, handlePrepare, currentCooking }) => {
  return (
    <div className="space-y-10 py-6 px-2 border rounded-2xl ">
      <div className="space-y-3">
        <div className="text-center text-[#282828] font-bold space-y-3">
          <h2>Want to cook: 0{cart.length}</h2>
          <hr />
        </div>
        <div className="overflow-x-auto">
          <table className="table ">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {cart.map((item, idx) => (
                <tr key={idx} className="bg-base-200">
                  <th>{idx + 1}</th>
                  <td>{item.recipe_name}</td>
                  <td>{item.preparing_time} </td>
                  <td>{item.calories} </td>
                  <td>
                    <button
                      onClick={() => handlePrepare(item.recipe_id, item)}
                      className="btn bg-[#0be58a] font-medium border-none rounded-full"
                    >
                      Preparing
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* =============================== */}
      <div className="space-y-2">
        <div className="text-center text-[#282828] font-bold space-y-3">
          <h2>Currently cooking: 0{currentCooking.length}</h2>
          <hr />
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {currentCooking.map((item, idx) => (
                <tr key={idx} className="bg-base-200">
                  <th>{idx + 1}</th>
                  <td>{item.recipe_name}</td>
                  <td>{item.preparing_time} </td>
                  <td>{item.calories} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;

{
  /* <tbody>
row 1
<tr className="bg-base-200">
  <th>1</th>
  <td>Chicken Caesar Salad</td>
  <td>20 </td>
  <td>400 calories</td>
  <td>
    <button className="btn bg-[#0be58a] font-medium border-none rounded-full">
      Preparing
    </button>
  </td>
</tr>
</tbody> */
}
