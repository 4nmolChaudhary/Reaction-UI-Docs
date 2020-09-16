import { Link } from "gatsby";
import React from "react";

function Links() {
  return (
    <div className="link-div">
      <Link to="#gettingStarted" className="main-class">
        Getting Started
      </Link>
      <Link to="#components" className="main-class">
        Components
      </Link>
      <a href="#avatar" className="type">
        Avatars
      </a>
      <a href="#buttons" className="type">
        Buttons
      </a>
      {["Primary Button", "Secondary Button", "Ghost Button", "Icon Button"].map((item) => (
        <a href={`#${item.split(" ").join("")}`} key={item} className="sub-types">
          {item}
        </a>
      ))}
      <a href="#inputs" className="type">
        Inputs
      </a>
      {["Text Box", "Text Area", "Checkbox", "Toggle"].map((item) => (
        <a href={`#${item.split(" ").join("")}`} key={item} className="sub-types">
          {item}
        </a>
      ))}
      <a href="#layouts" className="type">
        Layouts
      </a>
      {["Stack", "Grid"].map((item) => (
        <a href={`#${item.split(" ").join("")}`} key={item} className="sub-types">
          {item}
        </a>
      ))}
      <a href="#fonts" className="type">
        Fonts
      </a>
    </div>
  );
}

export default Links;
