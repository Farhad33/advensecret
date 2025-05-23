import { green } from "@mui/material/colors"

export const color = {
    VfixBlue: '#00aeef',
    white: '#ffffff',
    black: '#000000',
    gray: '#e3e3e3',
    main: '#f5eedc',
    green: '#657c62',
    red: '#9d0200'
}

// green
// 657c62
//     .
//     red
// 9d0200
//     .
//     khaki
// eeefea

export const Theme = {
    typography: {
        component: {
            h1: 'h1',
            h2: 'h2',
            h3: 'h3',
            h4: 'h4',
            h5: 'h5',
            h6: 'h6',
            subline1: "p",
            subline2: "p",
            subline3: "p",
            subline4: "p",
            body1: "p",
            body2: "p",
            body3: "p",
            body4: "p",
            caption: "span",
            overLine: "p",
        },
        fontSize: {
            h1: "calc(0.4vw + 24px)",
            h2: "calc(0.4vw + 22px)",
            h3: "calc(0.4vw + 20px)",
            h4: "calc(0.4vw + 18px)",
            h5: "calc(0.4vw + 16px)",
            h6: "calc(0.4vw + 14px)",
            subline1: "21px",
            subline2: "12px",
            subline3: "calc(1vw + 5px)",
            subline4: "calc(0.5vw + 9px)",
            body1: "calc(0.4vw + 8px)",
            body2: "calc(0.4vw + 10px)",
            body3: "calc(0.4vw + 12px)",
            body4: "calc(0.4vw + 14px)",
            caption: "14px",
            overLine: "calc(0.5vw + 7px)",
        },
        lineHeight: {
            h1: "calc(0.4vw + 30px)",
            h2: "calc(0.4vw + 28px)",
            h3: "calc(0.4vw + 26px)",
            h4: "calc(0.4vw + 24px)",
            h5: "calc(0.4vw + 22px)",
            h6: "calc(0.4vw + 20px)",
            subline1: "24px",
            subline2: "25px",
            subline3: "calc(1vw + 5px)",
            body1: "calc(0.5vw + 12px)",
            body2: "calc(0.5vw + 16px)",
            body3: "calc(0.5vw + 20px)",
            body4: "calc(0.5vw + 24px)",
            buttonSmall: "calc(0.4vw + 15px)",
            buttonMedium: "calc(0.4vw + 15px)",
            buttonLarge: "calc(0.4vw + 15px)",
            caption: "20px",
            overLine: "calc(1vw + -1px)",
        },
        fontWeight: {
            h1: 600,
            h2: 600,
            h3: 600,
            h4: 600,
            h5: 600,
            body1: 400,
            body2: 400,
            body3: 400,
            body4: 400,
            buttonSmall: "calc(0.4vw + 15px)",
            buttonMedium: "calc(0.4vw + 15px)",
            buttonLarge: "calc(0.4vw + 15px)",
            subline2: 400,
        },
    },
    button: {
        variant: {
            primary: {
                background: color.VfixBlue,
                color: color.white,
            },
            secondary: {
                background: color.main,
                color: color.black,
            },
        },
        size: {
            small: {
                fontSize: "14px",
                fontWeight: "400",
                padding: "5px 20px",
            },
            medium: {
                fontSize: "17px",
                fontWeight: "400",
                padding: "10px 30px",
            },
            large: {
                fontSize: "20px",
                fontWeight: "600",
                padding: "15px 40px",
            },
        },
    }
}
