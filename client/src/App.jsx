import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Payments from "./pages/Payments";
import Transparency from "./pages/Transparency";
import Parking from "./pages/Parking";
import Notices from "./pages/Notices";
import Vendors from "./pages/Vendors";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/transparency" element={<Transparency />} />
            <Route path="/parking" element={<Parking />} />
            <Route path="/notices" element={<Notices />} />
            <Route path="/vendors" element={<Vendors />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;