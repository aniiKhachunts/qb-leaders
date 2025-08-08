import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ServicePage from "./pages/ServicePage.jsx";
import Blog from "./pages/blog/Blog.jsx";
import BlogPost from "./pages/blog/BlogPost.jsx";

function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/services/:slug" element={<ServicePage/>}/>
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
