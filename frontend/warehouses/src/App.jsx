import Navigation from "./Components/Navigation/Navigation";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="flex flex-col h-screen font-inter">
      <Navigation />
      <main className="flex justify-center flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
