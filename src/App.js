import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Content from "./components/content/Content";

function App() {
  return (
    <>
      <Header />
      <main>
        <Content />
        <Footer />
      </main>
    </>
  );
}

export default App;
