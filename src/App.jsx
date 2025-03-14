import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContentFrame from "./components/ContentFrame";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <ContentFrame />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
