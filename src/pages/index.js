import { Link } from "gatsby";
import React from "react";
import { PrimaryButton, Font, Stack } from "reaction-ui";
import Container from "../components/container";
import Logo from "../components/Logo";

const IndexPage = () => (
  <Container>
    <Stack direction="column" gap={10}>
      <Font fontSize={32} fontFamily="Gilroy-Extrabold">
        <span role="img" aria-label="emoji">
          🤜
        </span>
        Hi people
        <span role="img" aria-label="emoji">
          🤛
        </span>
      </Font>
      <Font fontWeight={800} fontSize={20} textAlign="center">
        Reaction UI comes with a set of components built with styled-components <br />
        <center>that are accessible, responsive and customisable.</center>
      </Font>
      <Logo width={600} />
      <Link to="/getting-started" className="link">
        <PrimaryButton shadow borderRadius={4} bgColor="#3c122c">
          Getting Started
        </PrimaryButton>
      </Link>
    </Stack>
  </Container>
);

export default IndexPage;
