"use client";

import { ThemeProvider } from "next-themes";
import { ReactMode } from "react";

export function Providers({ children }: { children: ReactMode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
