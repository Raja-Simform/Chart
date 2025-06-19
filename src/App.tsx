import "./App.css";
import Chart from "./components/Chart/Chart";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { useState } from "react";
import type { ChartType } from "./constants/constant";

function App() {
  const [chartType, setChartType] = useState<ChartType | null>(null);

  function handleCLick(type: ChartType) {
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
