import React from "react";
import { LiveProvider, LiveEditor, LivePreview } from "react-live";
import { PrimaryButton, SecondaryButton, GhostButton, IconButton } from "reaction-ui";
import Table from "./Table";
import { FaBeer } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";

const scope = { PrimaryButton };
const code = `
<PrimaryButton shadow borderRadius={4}>Hello World</PrimaryButton>
`;
const example = `
import { FaBeer } from "react-icons/fa";

<PrimaryButton shadow borderRadius={4} iconRight>
    Drink Beer
    <FaBeer />
</PrimaryButton>
`;

const secScope = { SecondaryButton };
const secCode = `
<SecondaryButton>Back</SecondaryButton>
`;
const ghScope = { GhostButton };
const ghCode = `
<GhostButton>Cancel</GhostButton>
`;
const icCode = `
<IconButton bgColor="#2d2d2d" color="#fff" >
    <ThunderBoltIcon />
</IconButton>
`;

function ButtonDocs() {
  return (
    <div id="buttons">
      <h3 id="buttons">Buttons</h3>
      <p>A button is a way to ask users for action</p>
      <h2 id="PrimaryButton">Primary Button</h2>
      <div className="code-block">
        <LiveProvider code={code} scope={scope} disabled>
          <LiveEditor />
          <LivePreview />
        </LiveProvider>
      </div>
      <h2 id="PrimaryButton">Example</h2>
      <div className="code-block">
        <LiveProvider code={example} disabled>
          <LiveEditor />
        </LiveProvider>
        <PrimaryButton shadow borderRadius={4} iconRight>
          Drink Beer
          <FaBeer />
        </PrimaryButton>
      </div>
      <div className="props-table">
        <h1>Props</h1>
        <Table
          rowData={[
            ["fontFamily", `String`, `Defines the font style in the button`],
            [`fontWeight`, `Number`, `Defines the weight of the font in button`],
            [`fontSize`, `Number`, `Specifies the size of the fonts in pixels`],
            [`borderRadius`, `Number`, `Corner radius of the button`],
            [`color`, `String:[Hex Code]`, `Color of the font/icon in button`],
            [`bgColor`, `String:[Hex Code]`, `Background Color of the button`],
            [`shadow`, `Boolean`, `Shadow for the button`],
            [`iconRight`, `Boolean`, `To add icon on right side of text for button`],
            [`iconLeft`, `Boolean`, `To add icon on left side of text for button`],
          ]}
        />
      </div>
      <h2 id="SecondaryButton">Secondary Button</h2>
      <div className="code-block">
        <LiveProvider code={secCode} scope={secScope} disabled>
          <LiveEditor />
          <LivePreview />
        </LiveProvider>
      </div>
      <div className="props-table">
        <h1>Props</h1>
        <Table
          rowData={[
            ["fontFamily", `String`, `Defines the font style in the button`],
            [`fontWeight`, `Number`, `Defines the weight of the font in button`],
            [`fontSize`, `Number`, `Specifies the size of the fonts in pixels`],
            [`borderRadius`, `Number`, `Corner radius of the button`],
            [`color`, `String:[Hex Code]`, `Color of the font/icon in button and border`],
            [`bgColor`, `String:[Hex Code]`, `Background Color of the button on Hover`],
            [`hoverColor`, `String:[Hex Code]`, `Color for the button on Hover`],
            [`iconRight`, `Boolean`, `To add icon on right side of text for button`],
            [`iconLeft`, `Boolean`, `To add icon on left side of text for button`],
          ]}
        />
      </div>
      <h2 id="GhostButton">Ghost Button</h2>
      <div className="code-block">
        <LiveProvider code={ghCode} scope={ghScope} disabled>
          <LiveEditor />
          <LivePreview />
        </LiveProvider>
      </div>
      <div className="props-table">
        <h1>Props</h1>
        <Table
          rowData={[
            ["fontFamily", `String`, `Defines the font style in the button`],
            [`fontWeight`, `Number`, `Defines the weight of the font in button`],
            [`fontSize`, `Number`, `Specifies the size of the fonts in pixels`],
            [`color`, `String:[Hex Code]`, `Color of the font/icon in button and border`],
          ]}
        />
      </div>
      <h2 id="IconButton">Icon Button</h2>
      <div className="code-block">
        <LiveProvider code={icCode} disabled>
          <LiveEditor />
        </LiveProvider>
        <IconButton bgColor="#2d2d2d" color="#fff" borderRadius={60} size={20}>
          <AiFillThunderbolt />
        </IconButton>
      </div>
      <div className="props-table">
        <h1>Props</h1>
        <Table
          rowData={[
            [`size`, `Number`, `Specifies the size of the icon in pixels`],
            [`borderRadius`, `Number`, `Corner radius of the button`],
            [`color`, `String:[Hex Code]`, `Color of the icon`],
            [`bgColor`, `String:[Hex Code]`, `Background Color of the button on Hover/Background`],
            [`shadow`, `Boolean`, `Shadow for the button`],
          ]}
        />
      </div>
    </div>
  );
}

export default ButtonDocs;
