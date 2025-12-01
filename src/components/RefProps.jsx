import { useRef, forwardRef } from "react";

const CustomInput = forwardRef(({ label, placeholder, className }, ref) => {
  return (
    <div className="flex flex-col space-y-1 w-full">
      <label className="text-sm font-medium text-purple-300">{label}</label>
      <input
        ref={ref}
        type="text"
        placeholder={placeholder}
        className={`px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white
        focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white/20
        transition-all placeholder-gray-400 ${className}`}
      />
    </div>
  );
});

CustomInput.displayName = "Custom Input";

const RefProps = () => {
  const inputRef = useRef(null);
  const secondInputRef = useRef(null);

  const focusInput = () => inputRef.current?.focus();
  const focusSecondInput = () => secondInputRef.current?.focus();

  const getInputValue = () => {
    if (inputRef.current) {
      alert(`Input value: ${inputRef.current.value}`);
    }
  };

  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  return (
    <div className="space-y-6">

      <h2 className="text-2xl font-bold text-purple-300">Ref Props</h2>
      <p className="text-gray-300 max-w-2xl">
        Ref props allow parent components to directly access and control DOM elements.
        This is useful for managing focus, reading values, or imperatively clearing fields.
      </p>

      <div className="p-6 bg-white/5 border border-white/10 rounded-2xl shadow-xl backdrop-blur-xl space-y-6">

        <h3 className="text-xl font-semibold text-amber-300">Try It Out</h3>

        <div className="flex flex-col gap-4">
          <CustomInput ref={inputRef} label="First Input" placeholder="Type something..." />
          <CustomInput ref={secondInputRef} label="Second Input" placeholder="Type something else..." />
        </div>

        <div className="flex flex-wrap gap-4 pt-2">
          <button
            onClick={focusInput}
            className="px-5 py-2 rounded-xl bg-linear-to-r from-purple-500 to-pink-500 
            hover:opacity-90 transition-all font-medium text-white"
          >
            Focus First Input
          </button>

          <button
            onClick={focusSecondInput}
            className="px-5 py-2 rounded-xl bg-linear-to-r from-blue-500 to-cyan-500 
            hover:opacity-90 transition-all font-medium text-white"
          >
            Focus Second Input
          </button>

          <button
            onClick={getInputValue}
            className="px-5 py-2 rounded-xl bg-linear-to-r from-green-500 to-emerald-500 
            hover:opacity-90 transition-all font-medium text-white"
          >
            Get Input Value
          </button>

          <button
            onClick={clearInput}
            className="px-5 py-2 rounded-xl bg-linear-to-r from-red-500 to-rose-500 
            hover:opacity-90 transition-all font-medium text-white"
          >
            Clear Input
          </button>
        </div>
      </div>

    </div>
  );
};

export default RefProps
