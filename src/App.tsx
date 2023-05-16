import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
