export const colorTokens = {
    grey: {
        0: "#FFFFFF",
        10: "#f6f6f6",
        50: "#f0f0f0",
        100: "#e0e0e0",
        200: "#c2c2c2",
        300: "#a3a3a3",
        400: "#858585",
        500: "#666666",
        600: "#4d4d4d",
        700: "#333333",
        800: "#1a1a1a",
        900: "#0a0a0a",
        1000: "#000000",
    },

    primary: {
        50: "#e6fbff",
        100: "#ccf7fe",
        200: "#99eefd",
        300: "#66e6fc",
        400: "#33ddfb",
        500: "#00d5fa",
        600: "#00a0bc",
        700: "#006b7d",
        800: "#00353f",
        900: "#001519",
    },
};

//mui theme settings
export const themeSettings = (mode) => {
    return {
        palette: {
            mode: mode,
            ...(mode === "dark" ? {
                //pallete for dark mode
                primary: {
                    dark: colorTokens.primary[200],
                    main: colorTokens.primary[500],
                    light: colorTokens.primary[800],
                },
                neutral: {
                    dark: colorTokens.grey[100],
                    main: colorTokens.grey[200],
                    mediumMain: colorTokens.grey[300],
                    medium: colorTokens.grey[400],
                    light: colorTokens.grey[700]
                },

                background: {
                    default: colorTokens.grey[900],
                    alt: colorTokens.grey[800]
                }
            }
            : 
            {
                //pallete for light

                primary: {
                    dark: colorTokens.primary[700],
                    main: colorTokens.primary[500],
                    light: colorTokens.primary[50],
                },
                neutral: {
                    dark: colorTokens.grey[700],
                    main: colorTokens.grey[500],
                    mediumMain: colorTokens.grey[400],
                    medium: colorTokens.grey[300],
                    light: colorTokens.grey[50]
                },

                background: {
                    default: colorTokens.grey[10],
                    alt: colorTokens.grey[0]
                },
            }), 
        },
        typography: {
            fontFamily: ["Rubik", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Rubik", "sans-serif"].join(","),
                fontSize: 40,

            },
            h2: {
                fontFamily: ["Rubik", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Rubik", "sans-serif"].join(","),
                fontSize: 24,

            },
            h4: {
                fontFamily: ["Rubik", "sans-serif"].join(","),
                fontSize: 20,

            },
            h5: {
                fontFamily: ["Rubik", "sans-serif"].join(","),
                fontSize: 16,

            },
            h6: {
                fontFamily: ["Rubik", "sans-serif"].join(","),
                fontSize: 14,

            },
        }
    };
};