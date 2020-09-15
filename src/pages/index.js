import React from "react"
import { PrimaryButton } from "reaction-ui"
import Container from "../components/container"

const IndexPage = () => (
  <Container>
    <h1> Hi people </h1>
    <p>
      Welcome to your new Gatsby site. sdsdsjghsjgfhsgf sfhsjfgsjfhsgf
      fksjhfjshfkjshfkjshf fksjfhsfk jshfjkshfjks fskfhskjfhskhfjkshf
    </p>
    <p> Now go build something great. </p>
    <PrimaryButton shadow borderRadius={4}>Hello World    </PrimaryButton>
    <PrimaryButton shadow borderRadius={4}>      hello World    </PrimaryButton>
  </Container>
)

export default IndexPage
