import './App.css';
import ReactDOM from "react-dom/client";
import Nav from './components/Nav';
import Buttons from './components/library/Buttons';
import { BrowserRouter, Route, Routes, Navigate, Link } from "react-router-dom";
import Typography from './components/library/Typography';

export default function App() {

  return (
    <div className="centered-page-lg">
      <BrowserRouter>
        <nav className="navbar-small">
          <div className="container">
            <a
              href=""
              className="btn-outlined-black hover-rounded text-hover-white active-black mr-1"
            >
              Documentation
            </a>
            <a
              href=""
              className="btn-outlined-black hover-white disabled"
            >
              Getting Started
            </a>
          </div>
        </nav>
        <div className="side-nav-container">
          <div className="side-nav pr-1">
            <div className="display-f direction-c mt-2">
              <Link
                to="/buttons"
                className="btn hover-blur hover-underline text-blue bg-hover-white">
                Buttons
              </Link>
              <Link
                to="/typography"
                className="btn hover-blur hover-underline text-blue bg-hover-white"
              >
                Typography
              </Link>
              <a
                href=""
                className="btn hover-blur hover-underline text-blue bg-hover-white disabled"
              >
                Navigation bar
              </a>
              <a
                href=""
                className="btn hover-blur hover-underline text-blue bg-hover-white disabled"
              >
                Side Navigation
              </a>
              <a
                href=""
                className="btn hover-blur hover-underline text-blue bg-hover-white disabled"
              >
                Forms
              </a>
              <a
                href=""
                className="btn hover-blur hover-underline text-blue bg-hover-white disabled"
              >
                Layout
              </a>
              <a
                href=""
                className="btn hover-blur hover-underline text-blue bg-hover-white disabled"
              >
                Grid
              </a>
            </div>
          </div>
          <div className="side-nav-content">
            <Routes>
              <Route path="/buttons" element={<Buttons />} />
              <Route path="/typography" element={<Typography />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}