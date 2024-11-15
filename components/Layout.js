import React from "react";
import { Container } from "react-bootstrap";
import MainNav from "./MainNav";

function Layout(props) {
  return (
    <>
      <MainNav />
      <br />
      <br />
      <br />
      <br />
      <Container>{props.children}</Container>
      <br />
    </>
  );
}

export default Layout;