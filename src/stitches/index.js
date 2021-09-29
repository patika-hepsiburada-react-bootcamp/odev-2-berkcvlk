import { createStitches } from "@stitches/react";

import { utils } from "./utils";
import { theme } from "./theme";

// IMPORTANT!
// To use configuration, you need to import this file "styled"
// constant and create component from it.
export const {
  styled, // To create stitched components
} = createStitches({
  theme,
  utils,
});
