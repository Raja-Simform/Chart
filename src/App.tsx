import "./App.css";
import Chart from "./components/Chart/Chart";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

function App() {
  return (
    <div>
      <Header />
      <main className="container">
        <SideBar />
        <Chart />
      </main>
    </div>
  );
}

export default App;
