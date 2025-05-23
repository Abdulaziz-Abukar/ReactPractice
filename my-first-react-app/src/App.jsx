import React from "react";
import BusinessCard from "./components/BusinessCard/BusinessCard";
import FactsAboutMe from "./components/Facts-About-Me-List/Facts-About-Me-List";
import SimpleMultiplcation from "./components/SimpleMulitiplication/SimpleMultiplication";
import LoginStatusCard from "./components/LoginStatusCard/LoginStatusCard";
import MiniGreeting from "./components/MiniGreeting/MiniGreeting";

function App() {
  return (
    <>
      <BusinessCard />
      <FactsAboutMe />
      <SimpleMultiplcation />
      <LoginStatusCard />
      <MiniGreeting />
    </>
  )
}

export default App;