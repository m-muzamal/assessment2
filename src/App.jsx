import { ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import Blog from "./components/blog/Blog";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import Navbar from "./components/nav/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const theme = createTheme({
  typography: {
    h3: {
      fontSize: 48,
      fontWeight: "bold",
    },
  },
  palette: {
    secondary: {
      main: "#1e1b1b",
      light: "#1e1b1bf4",
    },
    primary: {
      main: "#ff6433",
    },
    mint: {
      main: "#00d289",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/blog/:id" element={<Blog />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
