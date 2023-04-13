import Navigation from "./Components/Navigation/Navigation";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="font-inter">
      <Navigation />
      <main className="flex justify-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
