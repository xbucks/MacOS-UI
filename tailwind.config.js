/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        system: {
          red: {
            light: "#FF3B30",
            dark: "#FF453A"
          },
          orange: {
            light: "#FF9500",
            dark: "#FF9F0A"
          },
          yellow: {
            light: "#FFCC00",
            dark: "#FFD60A"
          },
          green: {
            light: "#34C759",
            dark: "#32D74B"
          },
          teal: {
            light: "#5AC8FA",
            dark: "#64D2FF"
          },
          blue: {
            light: "#007AFF",
            dark: "#0A84FF"
          },
          indigo: {
            light: "#5856D6",
            dark: "#5E5CE6"
          },
          purple: {
            light: "#AF52DE",
            dark: "#BF5AF2"
          },
          pink: {
            light: "#FF2D55",
            dark: "#FF2D55"
          },
          gray01: {
            light: "#8E8E93",
            dark: "#8E8E93"
          },
          gray02: {
            light: "#AEAEB2",
            dark: "#636366"
          },
          gray03: {
            light: "#C7C7CC",
            dark: "#48484A"
          },
          gray04: {
            light: "#D1D1D6",
            dark: "#3A3A3C"
          },
          gray05: {
            light: "#E5E5EA",
            dark: "#2C2C2E"
          },
          gray06: {
            light: "#F2F2F7",
            dark: "#1C1C1E"
          }
        },
        linear: {
          blue: {
            from: "#4B91F7",
            to: "#367AF6"
          }
        }
      },
      minWidth: {
        10: "10rem"
      }
    }
  },
  plugins: []
};
