import "../dist/App.css";

function App() {
  return (
    <>
        <h2 className="text-6xl font-extrabold text-green-300 py-3">Calories Tracker</h2>
        <div className="flex flex-col items-center bg-slate-50 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <form className="mb-4 flex flex-row w-2/3">
            <input
              className="mx-1 text-2xl shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="food"
              type="text"
              placeholder="Food"
            />
            <input
              className="mx-1 text-2xl shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="calories"
              type="text"
              placeholder="Calories"
            />
            <button className="mx-1 w-1/6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add</button>
          </form>

        <div className="mb-4 flex flex-row w-1/2">
            <div className="flex flex-row justify-between w-full rounded-lg border border-blue-100 bg-blue-50 py-4">
              <div className="text-start px-4">
                <p className="text-2xl">Carrot</p>
                <span className="text-lg text-slate-400">50 calories</span>
              </div>
              <div className="action">
                <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold mx-1 py-2 my-2 px-4 mr-3 rounded">Edit</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold mx-1 py-2 my-2 px-4 mr-3 rounded">Delete</button>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default App;
