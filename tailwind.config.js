/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hike-water': "url('http://easyhiker.co.uk/wp-content/uploads/2012/09/95781fea_smush_7987531752_47ce9eeaff_z.jpg')",
      },
    }
  },
  plugins: [],
}
