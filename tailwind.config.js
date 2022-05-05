module.exports = {
    purge: ["./src/**/*.html", "./src/**/*.{react,ts,tsx}"],
    content: [],
    safelist: [
        {
            pattern: /./,
        },
    ],
    theme: {
        extend: {},
        borderRadius: {
            none: "0",
            sm: "0.125rem",
            DEFAULT: "20px",
            md: "0.375rem",
            lg: "0.5rem",
            full: "9999px",
            large: "12px",
        },
        backdropFilter: {
            none: "none",
            blur: "blur(20px)",
        },
    },
    plugins: [require("daisyui")],
};
