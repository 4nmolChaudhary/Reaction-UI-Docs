import React from "react";
import { LiveProvider, LiveEditor, LivePreview } from "react-live";
import { Font } from "reaction-ui";
import Table from "./Table";

const scope = { Font };
const code = `
<Font fontFamily="Ligconsolata" fontWeight="bolder">() => This is a Custom Font</Font>
`;

function FontsDocs() {
  return (
    <div id="fonts">
      <h3 id="fonts">Fonts</h3>
      <p>Custom Fonts</p>
      <h2 id="Stack">Fonts</h2>
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
            ["fontFamily", `String`, `Defines the font style`],
            [`fontWeight`, `Number`, `Defines the weight of the font`],
            [`fontSize`, `Number`, `Specifies the size of the fonts in pixels`],
            [`borderRadius`, `Number`, `Corner radius of the backDrop`],
            [`color`, `String:[Hex Code]`, `Color of the font`],
            [`backDrop`, `String:[Hex Code]`, `Color of the back drop`],
          ]}
        />
      </div>
    </div>
  );
}

export default FontsDocs;
