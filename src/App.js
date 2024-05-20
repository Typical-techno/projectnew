import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import SidebarDefault from "./components/SidebarDefault";

function App() {
  return (
    <div className="App items-center" style={{ backgroundColor: "#DFD6D6" }}>
      <div className="z-30">
        <Navbar />
      </div>
      <div className="flex" style={{ backgroundColor: "#DFD6D6" }}>
        <div className="lg:w-[40%] mt-24 pt-2 justify-end flex z-20">
          <SidebarDefault />
          <Sidebar />
        </div>
        <div className="lg:w-[100%] mt-24 z-10">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
