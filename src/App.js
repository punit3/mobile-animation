import logo from "./logo.svg";
import "./App.css";
import { Splash } from "./components/SplashScreen";
import { BankCards } from "./screens/BankCards";
import { SalaryCard } from "./components/SalaryCard";
import { HomeScreen } from "./screens/HomeScreen";
import { History } from "./screens/History";
import { Catalogue } from "./screens/Catalogue";
import { useState } from "react";

function App() {
  const [menuItem, setMenuItem] = useState("home");

  const handleMenu = (value) => {
    setMenuItem(value);
  };
  const renderScreen = () => {
    switch (menuItem) {
      case "home":
        return <HomeScreen handleMenu={handleMenu}/>;
        break;
      case "cat":
        return <Catalogue handleMenu={handleMenu}/>;
        break;
        case "history":
        return <History handleMenu={handleMenu}/>;
        break;
    }
  };
  return (
    <div className="">
      {/* <HomeScreen/> */}

      {/* <History/>
       */}
      {/* <Catalogue handleMenu={handleMenu} /> */}

      {renderScreen()}
    </div>
  );
}

export default App;
