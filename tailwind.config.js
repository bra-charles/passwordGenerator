/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        JetBrainsMono: ['JetBrains Mono', 'monospace',]
      },
      colors:{
        "NeonGreen": "#A4FFAF",
        "AlmostWhite": "#E6E5EA",
        "Red": "#F64A4A",
        "Orange": "#FB7C58",
        "Yellow": "#F8CD65",
        "Grey": "#817D92",
        "DarkGrey": "#24232C",
        "VeryDarkGrey": "#18171F",
      },
    },
  },
  variants: {
    extend: {
      filter: ['hover', 'group-hover'],
      brightness: ['hover', 'group-hover'],
      invert: ['hover', 'group-hover'],
      textColor: ['hover', 'group-hover'], // Ensure textColor can be used with group-hover
    },
  },
  plugins: [],
}



