module.exports = {
  // ...other ESLint settings...

  // Specify the Node.js environment
  env: {
    browser: true,
    node: true, // Add this line
  },

  // Define any additional global variables (if needed)
  globals: {
    module: "readonly", // Add this line
  },

  // ...other ESLint rules...
};
