import React from "react";
import { LiveProvider, LiveEditor, LivePreview } from "react-live";

const code = `
npm install --save reaction-ui
`;

function Started() {
  return (
    <div id="gettingStarted">
      <h1>Getting Started</h1>
      <hr></hr>
      <h3>You can install Reaction-ui from npm using</h3>
      <div className="code-block">
        <LiveProvider code={code} disabled>
          <LiveEditor />
          <LivePreview />
        </LiveProvider>
      </div>
    </div>
  );
}

export default Started;
