const Cart = () => {
  return (
    <div className="space-y-10 py-6 px-2 border rounded-2xl border-red-400">
      <div className="space-y-3">
        <div className="text-center text-[#282828] font-bold space-y-3">
          <h2>Want to cook: 01</h2>
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
              <tr className="bg-base-200">
                <th>1</th>
                <td>Chicken Caesar Salad</td>
                <td>20 minutes</td>
                <td>400 calories</td>
                <td>
                  <button className="btn bg-[#0be58a] font-medium border-none rounded-full">
                    Preparing
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* =============================== */}
      <div className="space-y-2">
        <div className="text-center text-[#282828] font-bold space-y-3">
          <h2>Currently cooking: 01</h2>
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
              <tr className="bg-base-200">
                <th>1</th>
                <td>Spaghetti Bolognese</td>
                <td>30 minutes</td>
                <td>600 calories</td>
              </tr>
              {/* row 2 */}
              <tr className="bg-base-200">
                <th>2</th>
                <td>Spaghetti Bolognese</td>
                <td>30 minutes</td>
                <td>600 calories</td>
              </tr>
              {/* row 3 */}
              <tr className="bg-base-200">
                <th>3</th>
                <td>Spaghetti Bolognese</td>
                <td>30 minutes</td>
                <td>600 calories</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
