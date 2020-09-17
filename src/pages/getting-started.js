import React from "react";
import Header from "../components/Header";
import Container from "../components/container";
import "../styles/docs.css";
import Links from "../components/Links";
import ButtonDocs from "../components/ButtonDocs";
import Started from "../components/Started";
import "../styles/theme.css";
import AvatarDocs from "../components/AvatarDocs";
import InputDocs from "../components/InputDocs";

function GettingStartedPage() {
  return (
    <Container className="header-container">
      <main className="main">
        <Header />
        <div className="navigation-section">
          <Links />
        </div>
        <div className="docs-section">
          <Started />
          <AvatarDocs />
          <ButtonDocs />
          <InputDocs />
        </div>
      </main>
    </Container>
  );
}

export default GettingStartedPage;
