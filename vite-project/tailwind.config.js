/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('https://images.unsplash.com/photo-1658233427270-ba4d9d03b53c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8em9yb3xlbnwwfHwwfHx8MA%3D%3D')", 
      },
    },
  },
  plugins: [],
}