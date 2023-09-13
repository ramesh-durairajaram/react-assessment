import { useState, useRef } from "react";
import "../dist/App.css";
import FoodItem from "./FoodItem";

function App() {
  // const foodItems = [{"name": "Carrot", "calories": 30}, {"name": "Nuts", "calories": 50}];
  const [name, setName] = useState('');
  const [calories, setCalories] = useState(0);
  const [foodItems, setFoodItems] = useState([]);

  function addFoodItem() {
    const foodCalories = parseInt(calories);
    if (name != '' && foodCalories > 0) {
      setFoodItems([...foodItems, {name, calories:foodCalories}]);
    }
    console.log('form action happed');
  }


  return (
    <>
      <h2 className="text-6xl font-extrabold text-green-300 py-3">Calories Tracker</h2>
      <div className="flex flex-col items-center bg-slate-50 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <form className="mb-4 flex flex-row w-2/3" onSubmit={(event) => {event.preventDefault(); addFoodItem(); event.target.reset(); event.target.focus(); }}>
          <input
            className="mx-1 text-2xl shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="food"
            name="food"
            type="text"
            placeholder="Food"
            onChange={(event) => setName(event.target.value)}
          />
          <input
            className="mx-1 text-2xl shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="calories"
            name="calories"
            type="text"
            placeholder="Calories"
            onChange={(event) => setCalories(event.target.value)}
          />
          <button className="mx-1 w-1/6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add</button>
        </form>

        <div className="mb-4 flex flex-col w-1/2">
          {
            foodItems.map(
              ({name, calories}) =>  
                <FoodItem key={name} name={name} calories={calories} />
              )
          }
        </div>
      </div>
    </>
  );
}

export default App;
