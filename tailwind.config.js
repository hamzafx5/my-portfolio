module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		fontFamily: {
			sans: ["Radio Canada", "sans-serif"],
		},
		extend: {
			colors: {
				primary: "#5363ed",
				secondary: "#7987ff",
				third: "#4830db",
				gray: {
					50: "hsl(234, 10%, 90%)",
					100: "hsl(234, 10%, 90%)",
					200: "hsl(234, 10%, 80%)",
					300: "hsl(234, 10%, 70%)",
					400: "hsl(234, 10%, 60%)",
					500: "hsl(234, 10%, 50%)",
					600: "hsl(234, 10%, 40%)",
					700: "hsl(234, 10%, 30%)",
					800: "hsl(234, 10%, 20%)",
					900: "hsl(234, 10%, 10%)",
				},
			},
		},
	},
	plugins: [],
};
