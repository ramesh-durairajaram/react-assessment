import PropTypes from 'prop-types'

function FoodItem({name, calories}) {
    return (
        <div className="flex flex-row justify-between w-full rounded-lg border border-blue-100 bg-blue-50 py-4 my-2">
            <div className="text-start px-4">
                <p className="text-2xl">{name}</p>
                <span className="text-lg text-slate-400">{calories} calories</span>
            </div>
            <div className="action">
                <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold mx-1 py-2 my-2 px-4 mr-3 rounded">Edit</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold mx-1 py-2 my-2 px-4 mr-3 rounded">Delete</button>
            </div>
        </div>
    );
}

export default FoodItem;

FoodItem.propTypes = {
    name: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired
}