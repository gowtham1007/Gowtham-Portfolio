/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],  // <- Important to scan all your React files
  theme: {
    extend: {},                             // <- Optional: for custom styles
  },
  plugins: [],  
  
  extend: {
  fontFamily: {
    handwriting: ['"Pacifico"', 'cursive'],
  },
}
// <- Add Tailwind plugins here if needed
};
