import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import "./App.css";
// import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Root from "./layouts/Root";
import Contact from "./pages/Contact";
import Department from "./pages/Department";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Router>
        <Routes>
          <Route path="/" element={<Root />}>
            {/* <Route path="" element={<Welcome />} /> */}
            <Route path="" element={<Home />} />
            <Route path="/event-overview/:event" element={<Events />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/department-overview/:department" element={<Department />} />
          </Route>
        </Routes>
      </Router>
    </DndProvider>
  );
}

export default App;
