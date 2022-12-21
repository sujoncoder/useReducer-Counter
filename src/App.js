import React, { useReducer } from "react"

function App() {
  const initialState = 0;
  const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
      return state + action.payload
    } else if (action.type === "DECREMENT") {
      return state - action.payload 
    }
  }
  const [state, dispatch] = useReducer (reducer, initialState)

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT', payload: 5 });
  }

  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT', payload: 2 });
  }

  return (
    <div className="h-screen flex items-center">
        <div className='w-[300px] h-50 mx-auto border-4 border-x-yellow-300 border-y-cyan-200 rounded-2xl shadow-xl py-2'>
            <h1 className='text-center text-3xl'>{state}</h1><br /><br />

            {/* button section */}
            <div className='flex justify-evenly pb-4'>
            <button className='rounded-full bg-green-400 border-blue-200 border-2 ring-slate-400 ring-2 shadow-lg px-3 font-semibold active:bg-blue-400 py-1' onClick={handleIncrement}>Increment</button>

            <button className='rounded-full bg-pink-400 px-3 font-semibold active:bg-red-400 py-1 border-blue-200 border-2 ring-slate-400 ring-2 shadow-lg' onClick={handleDecrement}>Decrement</button>
            </div>

        </div>
    </div>
  );
}

export default App;
