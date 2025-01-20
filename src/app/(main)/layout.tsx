import Nav from "@modules/layout/templates/nav";
import React from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Nav />
      <main className="bg-gray-50 flex-1">{children}</main>
    </div>
  );
}
