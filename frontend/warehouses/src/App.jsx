import Navigation from "./Components/Navigation/Navigation";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="font-inter">
      <Navigation />
      <Outlet />
    </div>
  );
}

export default App;
