/* See https://github.com/hankchizljaw/modern-css-reset for more about reset style */

// prettier-ignore
import { globalStyle } from "@vanilla-extract/css";

globalStyle("*::before, *::after", {
  boxSizing: "border-box",
});

globalStyle(`h1, h2, h3, h4, p, figure, blockquote, dl, dd`, {
  margin: 0,
});

globalStyle(`ul[role="list"], ol[role="list"]`, {
  listStyle: "none",
});

globalStyle(`html:focus-within`, {
  scrollBehavior: "smooth",
});

globalStyle("body", {
  minHeight: "100vh",
  textRendering: "optimizeSpeed",
  lineHeight: 1.5,
});

globalStyle("a:not([class])", {
  textDecorationSkipInk: "auto",
});

globalStyle("img,picture", {
  maxWidth: "100%",
  display: "block",
});

globalStyle(`input, button, textarea, select`, {
  font: "inherit",
});
