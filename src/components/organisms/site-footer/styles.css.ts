import { style } from "@vanilla-extract/css";

export const footer = style({
  backgroundColor: "fafafa", // TODO
  borderTop: "1px solid #eaeaea", //TODO
  padding: "3rem 0 0", // TODO
});

export const container = style({
  maxWidth: 1200, //TODO: var --geist-page-width
  margin: "0 auto",
  padding: "0 2rem",
});

export const footerGrid = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
  "@media": {
    "screen and (max-width: 768px)": {
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
    },
  },
  columnGap: "3%",
});

export const footerBrand = style({
  display: "flex",
  "@media": {
    "screen and (max-width: 768px)": {
      gridColumn: "span 4",
      marginBottom: "2rem",
    },
  },
});

export const footerBrandIcon = style({
  marginRight: "0.5rem",
  fontSize: "1.5rem",
});

export const footerBrandName = style({
  fontSize: "1.5rem",
});

export const footerGroup = style({
  marginBottom: "2rem",
  "@media": {
    "screen and (max-width: 425px)": {
      gridColumn: "span 2",
    },
  },
});

export const footerHeader = style({
  fontWeight: "bold",
  fontSize: ".875rem",
  margin: "0 0 1rem",
});

export const footerList = style({
  listStyle: "none",
  margin: "0",
  padding: "0",
});

export const footerListItem = style({
  lineHeight: "1.25",
  fontSize: ".875rem",
  marginBottom: "1rem",
});

export const footerListAnker = style({});
