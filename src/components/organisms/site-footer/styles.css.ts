import { style } from "@vanilla-extract/css";

export const root = style({
  borderTop: "1px solid #d2d3d7", // TODO
  backgroundColor: "fafafa", // TODO
});

export const container = style({
  maxWidth: 1200, //TODO: var --geist-page-width
  margin: "0 auto",
  paddingTop: 80,
  paddingLeft: 16,
  paddingRight: 16,
  "@media": {
    "screen and (min-width: 768px)": {
      paddingLeft: 24,
      paddingRight: 24,
    },
  },
});

export const inner = style({
  display: "flex",
  boxSizing: "border-box",
  flexFlow: "row wrap",
  width: "100%",
  justifyContent: "center",
  "@media": {
    "screen and (min-width: 900px)": {
      justifyContent: "space-between",
    },
  },
});

export const siteContainer = style({
  flexGrow: 0,
  flexBasis: "100%",
  maxWidth: "100%",
  flexDirection: "row",
  "@media": {
    "screen and (min-width: 900px)": {
      flexBasis: "25%",
      maxWidth: "25%",
    },
  },
});

export const brandGroup = style({
  flexGrow: 0,
  boxSizing: "border-box",
  margin: "0px 0px 24px",
  flexDirection: "row",
  display: "flex",
  justifyContent: "center",
  "@media": {
    "screen and (min-width: 900px)": {
      justifyContent: "start",
    },
  },
});

export const brandIcon = style({
  marginRight: "0.5rem",
  fontSize: "1.5rem",
});

export const brandName = style({
  fontSize: "1.5rem",
});

export const description = style({
  fontSize: "0.875rem",
  wordBreak: "break-all",
  width: "60%",
  margin: "0 auto 40px",
  "@media": {
    "screen and (min-width: 900px)": {
      width: "100%",
    },
  },
});

export const snsGroup = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  marginBottom: 40,
  "@media": {
    "screen and (min-width: 900px)": {
      justifyContent: "start",
    },
  },
});

export const snsItem = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  outline: 0,
  border: 0,
  margin: 0,
  cursor: "pointer",
  appearance: "none",
  padding: "8px",
  backgroundColor: "transparent",
});

export const snsIcon = style({
  width: 20,
  height: 20,
});

export const navigationContainer = style({
  flexBasis: "58.3333%",
  flexGrow: 0,
  maxWidth: "58.3333%",
});

export const navigationInner = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  "@media": {
    "screen and (min-width: 900px)": {
      flexDirection: "row",
    },
  },
});

export const navigationGroup = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  minWidth: 120,
  marginBottom: 40,
  "@media": {
    "screen and (min-width: 900px)": {
      alignItems: "flex-start",
    },
  },
});

export const navigationTitle = style({
  margin: 0,
  fontWeight: 700,
  fontSize: "0.75rem",
  lineHeight: 1.5,
});

export const navigationLink = style({
  margin: "1rem 0 0",
  fontWeight: 400,
  fontSize: "0.875rem",
  lineHeight: 1.5,
  textDecoration: "none",
});

export const copyright = style({
  margin: "80px 0px 0px",
  paddingBottom: 40,
  fontSize: "0.75rem",
  lineHeight: 1.5,
  fontWeight: 400,
  textAlign: "center",
  "@media": {
    "screen and (min-width: 900px)": {
      textAlign: "left",
    },
  },
});
