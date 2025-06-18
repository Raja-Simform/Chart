import "./App.css";
import Chart from "./components/Chart/Chart";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { useState } from "react";

function App() {
  const [chartType, setChartType] = useState<string | null>(null);
  function handleCLick(type: string) {
    setChartType(type);
  }
  return (
    <div>
      <Header />
      <main className="container">
        <SideBar handleClick={handleCLick} />
        <Chart type={chartType} />
      </main>
    </div>
  );
}

export default App;
