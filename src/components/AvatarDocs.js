import React from "react";
import { Avatar } from "reaction-ui";
import { LiveProvider, LiveEditor, LivePreview } from "react-live";
import Table from "./Table";

const scope = { Avatar };

const code = `
<Avatar type="boy" size={120}/>
`;

function AvatarDocs() {
  return (
    <div id="components">
      <h1>Components</h1>
      <hr></hr>
      <div className="install">{`import { ComponentName } from 'reaction-ui';`} </div>
      <h3 id="avatar">Avatars</h3>
      <p>Avatar can be used to display a user.</p>
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
            ["type", `String : ['boy','girl']`, "Specifies the type of default avatar type (required)"],
            ["size", `Number`, `Defines the size of the avatar`],
            ["src", `String`, `Specifies the path/link for the image`],
          ]}
        />
      </div>
    </div>
  );
}

export default AvatarDocs;
