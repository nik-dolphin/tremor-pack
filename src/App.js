import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import DonutChartComponent from "./components/DonutChart";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Blog from "./components/Blog";
import PageNotFound from "./PageNotFound";

export const performance = [
  {
    date: "2021-01-01",
    Sales: 900.73,
    Profit: 173,
    Customers: 73,
  },
  {
    date: "2021-01-02",
    Sales: 1000.74,
    Profit: 174.6,
    Customers: 74,
  },
  {
    date: "2021-01-03",
    Sales: 1100.93,
    Profit: 174.6,
    Customers: 74,
  },
  {
    date: "2021-01-04",
    Sales: 1200.9,
    Profit: 174.6,
    Customers: 74,
  },
  {
    date: "2021-01-05",
    Sales: 1200.98,
    Profit: 174.6,
    Customers: 74,
  },
  {
    date: "2021-01-06",
    Sales: 1300,
    Profit: 174.6,
    Customers: 74,
  },
  {
    date: "2021-01-07",
    Sales: 1300.96,
    Profit: 174.6,
    Customers: 74,
  },
  {
    date: "2021-01-08",
    Sales: 1200.05,
    Profit: 174.6,
    Customers: 74,
  },
  {
    date: "2021-01-09",
    Sales: 350.98,
    Profit: 174.6,
    Customers: 74,
  },
  {
    date: "2021-01-10",
    Sales: 1100.7,
    Profit: 174.6,
    Customers: 74,
  },
  {
    date: "2021-01-11",
    Sales: 1100.57,
    Profit: 174.6,
    Customers: 74,
  },
  {
    date: "2021-01-12",
    Sales: 1100.66,
    Profit: 174.6,
    Customers: 74,
  },
  {
    date: "2021-03-13",
    Sales: 882,
    Profit: 682,
    Customers: 682,
  },
  {
    date: "2021-01-14",
    Sales: 1100.7,
    Profit: 174.6,
    Customers: 74,
  },
  {
    date: "2021-01-15",
    Sales: 1100.57,
    Profit: 174.6,
    Customers: 74,
  },
  {
    date: "2021-01-16",
    Sales: 1100.66,
    Profit: 174.6,
    Customers: 74,
  },
  {
    date: "2021-03-17",
    Sales: 882,
    Profit: 682,
    Customers: 682,
  },
  {
    date: "2021-01-18",
    Sales: 350.98,
    Profit: 174.6,
    Customers: 74,
  },
  {
    date: "2021-01-19",
    Sales: 1100.7,
    Profit: 174.6,
    Customers: 74,
  },
  {
    date: "2021-01-20",
    Sales: 1100.57,
    Profit: 174.6,
    Customers: 74,
  },
  {
    date: "2021-01-21",
    Sales: 1100.66,
    Profit: 174.6,
    Customers: 74,
  },
  {
    date: "2021-03-22",
    Sales: 882,
    Profit: 682,
    Customers: 682,
  },
  {
    date: "2021-01-23",
    Sales: 1100.7,
    Profit: 174.6,
    Customers: 74,
  },
];

function App() {
  const [isActive, setIsActive] = useState(false);

  const handleMainClick = () => {
    setIsActive(false);
  };
  return (
    <>
      <Navbar setIsActive={setIsActive} isActive={isActive} />
      <Router>
        <main
          className={`main pt-[6.5rem]${isActive ? " main-blur" : ""}`}
          onClick={handleMainClick}
        >
          <div className="m-10">
            <Routes>
              <Route path="/404" element={<PageNotFound />} />
              <Route path="*" element={<Navigate replace to="/404" />} />
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/contact_us" element={<Contact />} />
              <Route exact path="/blog" element={<Blog />} />
              <Route exact path="/services" element={<Services />} />
            </Routes>
          </div>
        </main>
      </Router>
    </>
  );
}

export default App;
