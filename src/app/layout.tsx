import React from "react";
import QueryProvider from "../components/provider/QueryProvider";
import { GlobalStyle } from "../components/provider/GlobalStyle";

export const metadata = {
  title: "myfair front pre-course",
  description: "todolist",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <GlobalStyle />
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
