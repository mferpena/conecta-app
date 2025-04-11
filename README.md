https://www.npmjs.com/package/axios

npm i axios



https://www.npmjs.com/package/react-router-dom

npm i react-router-dom



https://v3.tailwindcss.com/docs/installation

npm install -D tailwindcss@3

Configure your template paths
Add the paths to all of your template files in your tailwind.config.js file.

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

Add the Tailwind directives to your CSS
Add the @tailwind directives for each of Tailwind’s layers to your main CSS file.
@tailwind base;
@tailwind components;
@tailwind utilities;


