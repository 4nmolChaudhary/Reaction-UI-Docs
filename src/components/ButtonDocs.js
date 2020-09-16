import React from "react";
import { LiveProvider, LiveEditor, LivePreview } from "react-live";
import { PrimaryButton } from "reaction-ui";
import Table from "./Table";

const scope = { PrimaryButton };

const code = `
<PrimaryButton shadow borderRadius={4}>Hello World</PrimaryButton>
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
    </div>
  );
}

export default ButtonDocs;
