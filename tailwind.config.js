module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      ],
  theme: {
    extend: {
        fontFamily: {
            sans: ['Inter', 'sans-serif'],
        },  
      colors: {
        primary: '#C2C5AA',
        secondary: '#5F816D',
        tertiary: '#EDE0D4',
        quaternary: '#F5F0E8',
      },
    },
  },
  plugins: [],
} 
