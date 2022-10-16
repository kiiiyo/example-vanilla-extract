import { style } from "@vanilla-extract/css";

export const headerContainer = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  minHeight: "4rem",
  borderBottom: "1px solid #d2d3d7", // TODO
  padding: "0 2rem",
});

export const siteBrand = style({
  display: "flex",
});

export const siteBrandIcon = style({
  marginRight: "0.5rem",
  fontSize: "1.5rem",
});

export const siteBrandName = style({
  fontSize: "1.5rem",
});
