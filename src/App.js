import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import BarterSearch from "./Components/BarterSearch";
import BarterProfile from "./Components/BarterProfile";
import Layout from "./Components/Layout";
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<BarterSearch />} />
          <Route path="profile" element={<BarterProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));