import React from "react";
import Card from "./Components/Card";

export default function App() {
  return (
    <div className="h-screen font-Work">
      <header className="bg-[url('assets/images/background-pattern-mobile.svg')] md:bg-[url('assets/images/background-pattern-desktop.svg')] bg-cover bg-bottom h-1/4 md:h-1/3"></header>
      <Card />
    </div>
  );
}
