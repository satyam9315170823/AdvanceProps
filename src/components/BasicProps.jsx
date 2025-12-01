import React, { useState } from "react";

function Button({ text, color = "primary", onClick, disabled }) {
  const colorClasses = {
    primary: "bg-blue-600 hover:bg-blue-700 border-blue-400",
    success: "bg-green-600 hover:bg-green-700 border-green-400",
    danger: "bg-red-600 hover:bg-red-700 border-red-400",
    warning: "bg-yellow-500 hover:bg-yellow-600 border-yellow-300 text-black",
    secondary: "bg-gray-600 hover:bg-gray-700 border-gray-300",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center gap-2 px-4 py-2 rounded-xl border 
                  transition-all font-medium shadow-md
                  ${colorClasses[color]} 
                  ${disabled && "opacity-50 cursor-not-allowed"}`}
    >
      {text}
    </button>
  );
}

const BasicProps = () => {
  const [clickCount, setClickCount] = useState(0);

  return (
    

    
    <div className="space-y-6">   {/* removed min-h-screen, padding only where needed */}
      <p className="text-gray-300">
        Buttons below demonstrate how props work in React using a reusable component.
      </p>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Different Colors</h3>

        <div className="flex flex-wrap gap-4">
          <Button text="Primary" color="primary" onClick={() => setClickCount(clickCount + 1)} />
          <Button text="Success" color="success" onClick={() => setClickCount(clickCount + 1)} />
          <Button text="Danger" color="danger" onClick={() => setClickCount(clickCount + 1)} />
          <Button text="Warning" color="warning" onClick={() => setClickCount(clickCount + 1)} />
          <Button text="Secondary" color="secondary" onClick={() => setClickCount(clickCount + 1)} />
          <Button text="Disabled" color="primary" disabled />
        </div>

        <p className="text-lg">
          Total Clicks: <span className="font-bold text-amber-300">{clickCount}</span>
        </p>
      </div>
    </div>
    
  );
};


export default BasicProps;
