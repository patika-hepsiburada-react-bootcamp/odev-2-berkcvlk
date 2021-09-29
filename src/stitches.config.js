import { createStitches } from "@stitches/react";

// IMPORTANT!
// To use configuration, you need to import this file "styled"
// constant and create component from it.

// Configuration of stitches can provide custom properties (utils)
// and more to handle css easily.
// This is just an example for the project.
export const {
  styled, // To create stitched components
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  utils: {
    marginX: (value) => ({ marginLeft: value, marginRight: value }),
    size: (value) => ({ width: value, height: value }),
  },
});
