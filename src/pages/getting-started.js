import React from "react";
import Header from "../components/Header";
import Container from "../components/container";
import "../styles/docs.css";
import Links from "../components/Links";

function GettingStartedPage() {
  return (
    <Container className="header-container">
      <main className="main">
        <Header />
        <div className="navigation-section">
          <Links />
        </div>
        <div className="docs-section"></div>
      </main>
    </Container>
  );
}

export default GettingStartedPage;
