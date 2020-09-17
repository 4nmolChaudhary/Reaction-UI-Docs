import React from "react";
import { LiveProvider, LiveEditor, LivePreview } from "react-live";
import { TextBox, TextArea } from "reaction-ui";

import Table from "./Table";

const scope = { TextBox };
const code = `
<TextBox type="text" placeholder="Placeholder Text" />
`;
const taScope = { TextArea };
const taCode = `
<TextArea rows={5} cols={64} placeholder="Placeholder Text" />
`;

function InputDocs() {
  return (
    <div id="inputs">
      <h3 id="inputs">Inputs</h3>
      <p>A button is a way to ask users for action</p>
      <h2 id="TextBox">Text Box</h2>
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
            [`fullWidth`, `Boolean`, `Defines the 100% width of input`],
          ]}
        />
      </div>
      <h2 id="TextArea">Text Area</h2>
      <div className="code-block">
        <LiveProvider code={taCode} scope={taScope} disabled>
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
          ]}
        />
      </div>
    </div>
  );
}

export default InputDocs;
