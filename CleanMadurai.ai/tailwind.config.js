/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cleanmadurai: {
          bg: '#f9fafb', // light gray background for the app body
          fg: '#111827', // dark text for readability
          primary: '#22c55e', // requested green brand color
          dark: '#f3f4f6', // slightly darker cards for inner list items
          card: '#ffffff', // bright white for main surface cards
          border: '#e5e7eb', // subtle borders
        }
      },
      fontFamily: {
        mono: ['"Space Mono"', 'monospace'], // or sans for government? They didn't ask to change the font, but government usually prefers sans. Let's stick with the current font for now unless requested.
      }
    },
  },
  plugins: [],
}
