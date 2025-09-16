import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CoversBar from "./components/CoversBar"; // ✅ import
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Covers from "./pages/Covers";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";

// insurance cover pages
import Life from "./pages/Life";
import Health from "./pages/Health";
import Motor from "./pages/Motor";
import General from "./pages/General";
import Travel from "./pages/Travel";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <CoversBar /> {/* ✅ Sticky covers bar */}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/covers" element={<Covers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />

          {/* individual cover pages */}
          <Route path="/life" element={<Life />} />
          <Route path="/health" element={<Health />} />
          <Route path="/motor" element={<Motor />} />
          <Route path="/general" element={<General />} />
          <Route path="/travel" element={<Travel />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
