import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
  }
});

// defining the 'rootstate' as the return type
export type RootState = ReturnType<typeof store.getState>;
