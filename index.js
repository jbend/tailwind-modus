const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ theme }) {}, {
  theme: {
    extend: {
      colors: (theme) => ({
        // Modus Palette
        // Brand
        "modus-brand-dark-blue": "#004f83",
        "modus-brand-blue": "#0063a3",
        "modus-brand-yellow": "#fbad26",
        "modus-brand-gray": "#252a2e",

        // Text
        "modus-text": "#363545",
        "modus-text-dark": "#f9f9fb",

        //Blue progression
        "modus-blue-dark": "#0e416c",
        "modus-blue": "#0063a3",
        "modus-blue-light": "#217cbb",
        "modus-blue-pale": "#dcedf9",

        //Neutral progression
        "modus-black": "#000000",
        "modus-gray-10": "#171c1e",
        "modus-gray-9": "#353a40",
        "modus-gray-8": "#464b52",
        "modus-gray-7": "#585c65",
        "modus-gray-6": "#6a6e79",
        "modus-gray-5": "#7d808d",
        "modus-gray-4": "#90939f",
        "modus-gray-3": "#a3a6b1",
        "modus-gray-2": "#b7b9c3",
        "modus-gray-1": "#cbcdd6",
        "modus-gray-0": "#e0e1e9",
        "modus-gray-light": "#f1f1f6",
        "modus-white": "#ffffff",

        "modus-danger": "#da212c",
        "modus-warning": "#e49325",
        "modus-success": "#006638",

        //Yellow progression
        "modus-yellow-dark": "#e49325",
        "modus-yellow": "#fbad26",
        "modus-yellow-light": "#fec157",
        "modus-yellow-pale": "#fff5e4",

        //Red progression
        "modus-red-dark": "#ab1f26",
        "modus-red": "#da212c",
        "modus-red-light": "#e86363",
        "modus-red-pale": "#fbd4d7",

        //Green progression
        "modus-green-dark": "#006638",
        "modus-green": "#1e8a44",
        "modus-green-light": "#4ea646",
        "modus-green-pale": "#e0eccf",
      }),
    },
  },
});
