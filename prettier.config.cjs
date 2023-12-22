/** @type {import("prettier").Config} */
module.exports = {
  plugins: ['prettier-plugin-tailwindcss'],
  trailingComma: 'none',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  printWidth: 120,
  tailwindConfig: "tailwind.config.js",
  tailwindFunctions: ['tv']
}
