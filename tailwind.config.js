/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        fontFamily: {
            sans: ["Poppins", "sans-serif"],
        },
        colors: {
            "darkBlue": "#37479c",
            // "primary": "#193852",
            // "secondary": "#406378",
            // "info": "#33a7a5",
            // "success": "#1baa60",
            // "warning": "#e6cc1b",
            // "danger": "#f70c0d",
            "light": "#e6e3d0",
            "primary": "#c53741",
            "secondary": "#ef5a2c",
            "info": "#ffc379",
            "success": "#65b000",
            "warning": "#fb7724",
            "danger": "#f80069",
            "button": {
                100: "#386e97",
                500: "#0076cf"
            }
            
        },
    },
    plugins: [],
}
