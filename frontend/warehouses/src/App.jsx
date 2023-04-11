import Navigation from "./Components/Navigation/Navigation";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="font-inter">
      <Navigation />
      <main className="flex justify-center">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
