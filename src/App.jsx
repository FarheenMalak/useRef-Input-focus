import { useRef } from 'react';

function App() {
   const input = useRef(null);

   function handleFocus() {
      input.current.focus();  
   }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <input
          type="text"
          placeholder="Click the button to focus here"
          ref={input}
          className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4"
        />
        <button
          onClick={handleFocus}
          className="w-full py-3 bg-purple-500 text-white font-semibold rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
        >
          Click here to focus input
        </button>
      </div>
    </div>
  );
}

export default App;

