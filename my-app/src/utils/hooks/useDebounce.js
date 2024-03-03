import { useState } from "react";

export default function useDebounce() {
  const [timeouts, setTimeouts] = useState("");

  const debounce = (func, wait = 100) => {
    clearTimeout(timeouts);

    const timeout = setInterval(() => {
      func();
    }, wait);
    setTimeouts(timeout);
  };
  return debounce;
}

// function MyComponent() {
//   const debouncedFunction = useDebounce();

//   const handleChange = (value) => {
//     console.log("Debounced function called with value:", value);
//     // Your logic here
//   };

//   const handleInputChange = (event) => {
//     // Call the debounced function with the input change handler and a wait time of 300 milliseconds
//     debouncedFunction(() => handleChange(event.target.value), 300);
//   };

//   return (
//     <input type="text" onChange={handleInputChange} />
//   );
// }

// export default MyComponent;
