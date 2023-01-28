import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import MainPage from "./Components/MainPage";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </Container>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
