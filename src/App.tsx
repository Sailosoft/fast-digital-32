import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-6">
      <div className="p-10 bg-white rounded-3xl shadow-xl border border-gray-200 text-center">
        <h1 className="text-4xl font-extrabold text-indigo-600 mb-2">React + SystemJS</h1>
        <p className="text-gray-500 mb-6 font-medium">Transpiling TSX in the browser...</p>

        <div className="text-6xl font-black text-gray-800 mb-8">
          {count}
        </div>

        <button
          onClick={() => setCount(count + 1)}
          className="px-8 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg"
        >
          Increment Counter
        </button>
      </div>

      <p className="text-sm text-gray-400">No build step required.</p>
    </div>
  );
};


ReactDOM.render(<App />, document.getElementById('app'));
