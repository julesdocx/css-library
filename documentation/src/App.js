import './App.css';
import ReactDOM from "react-dom/client";
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes, Navigate, Link } from "react-router-dom";
import GettingStarted from "./components/GettingStarted";
import Documentation from "./components/Documentation";
import Home from './components/Home';
import {Buttons, Typography, Grid, Layouts, Utilities, Tabs, TopNavigation, Cards} from "./components/library";
import Error from "./components/Error";


export default function App() {

  return (
    <div className="centered-page-lg">
      <BrowserRouter>
        <Nav />
          <Routes>
            <Route path="/" >
              <Route index element={<Home/>}/>
              <Route path="*" element={<Error />} />
              <Route path="gettingstarted" element={<GettingStarted />} />
              <Route path="documentation" element={<Documentation />}>
                <Route index element={<Buttons />} />
                <Route path="buttons" element={<Buttons />} />
                <Route path="typography" element={<Typography />} />
                <Route path="utilities" element={<Utilities />} />
                <Route path="tabs" element={<Tabs />} />
                <Route path="layouts" element={<Layouts />} />
                <Route path="grid" element={<Grid />} />
                <Route path="topnavigation" element={<TopNavigation />} />
                <Route path="Cards" element={<Cards />} />
              </Route>
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}