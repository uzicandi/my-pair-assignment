"use client";

import { Global } from "@emotion/react";
import { resetCss } from "../../styles/reset";

export function GlobalStyle() {
  return <Global styles={[resetCss]} />;
}
