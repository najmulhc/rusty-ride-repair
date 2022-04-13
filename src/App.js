import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import About from "./Pages/About/About";
import ServiceDetail from "./Pages/ServiceDetail/ServiceDetail";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* dynamic route for specific service , each service we can get using use params hook in serviceDetail component */}
        <Route path="/service/:serviceId" element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path="*" element={<NotFound/> }></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

