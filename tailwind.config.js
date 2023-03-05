/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hike-water': "url('http://easyhiker.co.uk/wp-content/uploads/2012/09/95781fea_smush_7987531752_47ce9eeaff_z.jpg')",
        'logo': "url('https://embed.tumblr.com/embed/post/t:J6Di_a2KtOmsEDddW-M7mw/710927855049113600/v2')"
      },
      colors: {
        'brown': '#52360d',
        'earth':'#6b9b82',
        'green':'#8ec4a8',
        'sand':'#e5dc7b',
        'orange':'#e9a33a',
      },
    }
  },
  plugins: [],
}
