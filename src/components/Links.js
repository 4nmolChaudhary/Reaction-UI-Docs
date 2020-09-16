import { Link } from "gatsby";
import React from "react";
import "../styles/links.css";

function Links() {
  return (
    <div>
      <Link to="#" className="main-class">Components</Link>
      <a href="#buttons" className="type">Buttons</a>
      <a href="#" className="sub-types">Primary Button</a>
      <a href="#" className="sub-types">Secondary Button</a>
      <a href="#" className="sub-types">Ghost Button</a>
      <a href="#" className="sub-types">Icon Button</a>
    </div>
  );
}

export default Links;
