import { createTransform } from "redux-persist";
import type { PayloadAction } from "@reduxjs/toolkit";

export const SetTransform = createTransform(
  (inboundState, key) => {
    if (inboundState && inboundState.__typename === "Set") {
      return {
        ...inboundState,
        data: Array.from(inboundState.data),
      };
    }
    return inboundState;
  },
  (outboundState, key) => {
    if (outboundState && outboundState.data instanceof Array) {
      return new Set(outboundState.data);
    }
    return outboundState;
  },
  { whitelist: ["mySet"] }
);
