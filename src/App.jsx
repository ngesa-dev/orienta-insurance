import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CoversBar from "./components/CoversBar"; // ✅ import
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Covers from "./pages/Covers";

import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";

// insurance cover pages
import Life from "./pages/Life";
import Health from "./pages/Health";
import Motor from "./pages/Motor";
import General from "./pages/General";
import Travel from "./pages/Travel";
import Leadership from "./pages/Leadership";

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
          <Route path="/leadership" element={<Leadership/>} />
        
        <Route path="/blog/:id" element={<BlogDetails />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
