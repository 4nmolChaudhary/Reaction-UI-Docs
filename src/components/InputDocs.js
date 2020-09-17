import React from "react";
import { LiveProvider, LiveEditor, LivePreview } from "react-live";
import { TextBox, TextArea, CheckBox, Toggle } from "reaction-ui";

import Table from "./Table";

const scope = { TextBox };
const code = `
<TextBox type="text" placeholder="Placeholder Text" />
`;
const taScope = { TextArea };
const taCode = `
<TextArea rows={5} cols={64} placeholder="Placeholder Text" />
`;
const chScope = { CheckBox };
const chCode = `
<CheckBox size={22} defaultChecked />
`;
const tgScope = { Toggle };
const tgCode = `
<Toggle size={38} />
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
      <h2 id="Checkbox">Checkbox</h2>
      <div className="code-block">
        <LiveProvider code={chCode} scope={chScope} disabled>
          <LiveEditor />
          <LivePreview />
        </LiveProvider>
      </div>
      <div className="props-table">
        <h1>Props</h1>
        <Table
          rowData={[
            [`size`, `Number`, `Specifies the size of the Checkbox pixels`],
            [`borderRadius`, `Number`, `Corner radius of the Checkbox`],
            [`checkmarkColor`, `String:[Hex Code]`, `Color of the checkmark in checkbox`],
            [`bgColor`, `String:[Hex Code]`, `Background Color of the Checkbox`],
            [`hoverBg`, `String:[Hex Code]`, `Background Color of the Checkbox on Hover event`],
            [`bgOnCheck`, `String:[Hex Code]`, `Background Color of the Checkbox after checked`],
            [`defaultChecked`, `Boolean`, `To check the box by default`],
          ]}
        />
      </div>
      <h2 id="Toggle">Toggle</h2>
      <div className="code-block">
        <LiveProvider code={tgCode} scope={tgScope} disabled>
          <LiveEditor />
          <LivePreview />
        </LiveProvider>
      </div>
      <div className="props-table">
        <h1>Props</h1>
        <Table
          rowData={[
            [`size`, `Number`, `Specifies the size of the Checkbox pixels`],
            [`switchColor`, `String:[Hex Code]`, `Color of the switch/thumb`],
            [`toggleOffColor`, `String:[Hex Code]`, `Color of toggle when OFF`],
            [`toggleOnColor`, `String:[Hex Code]`, `Color of toggle when ON`],
            [`defaultChecked`, `Boolean`, `To keep toggle ON default`],
          ]}
        />
      </div>
    </div>
  );
}

export default InputDocs;
