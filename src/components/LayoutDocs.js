import React from "react";
import { LiveProvider, LiveEditor, LivePreview } from "react-live";
import { Stack, Grid, Row, Column } from "reaction-ui";
import Table from "./Table";

const stScope = { Stack };
const stCode = `
<Stack justify="space-between">
    <div className="box" ></div>
    <div className="box" ></div>
    <div className="box" ></div>
    <div className="box" ></div>
    <div className="box" ></div>
</Stack>
`;
const gdScope = { Grid, Row, Column };
const gdCode = `
<Grid justify="space-between" rowGap={10}>
    <Row colGap={10}>
        <Column start={1} end={6}>
            <div className="slab"></div>
        </Column>
        <Column start={6} end={13}>
            <div className="slab"></div>
        </Column>
    </Row>
    <Row colGap={10}>
        <Column start={1} end={4}>
            <div className="slab"></div>
        </Column>
        <Column start={4} end={5}>
            <div className="slab"></div>
        </Column>
        <Column start={5} end={13}>
            <div className="slab"></div>
        </Column>
    </Row>
</Grid>
`;

function LayoutDocs() {
  return (
    <div id="layouts">
      <h3 id="layouts">Layouts</h3>
      <p>Pure Layout of CSS FlexBox and 12 Column Grid</p>
      <h2 id="Stack">Stack</h2>
      <div className="code-block">
        <LiveProvider code={stCode} scope={stScope} disabled>
          <LiveEditor />
          <LivePreview />
        </LiveProvider>
      </div>
      <div className="props-table">
        <h1>Props</h1>
        <Table
          rowData={[
            [`fullWidth`, `Boolean`, `Defines the 100% width of div`],
            [`justify`, `String`, `Justify the flex items`],
            [`items`, `String`, `Aligns the flex items on cross axis`],
            [`direction`, `String`, `Direction of the Flex Container`],
            [`padding`, `Number`, `Padding of the Flex Container`],
            [`gap`, `Number`, `Gap between the flex items`],
          ]}
        />
      </div>
      <h2 id="Grid">Grid</h2>
      <div className="code-block">
        <LiveProvider code={gdCode} scope={gdScope} disabled>
          <LiveEditor />
          <LivePreview />
        </LiveProvider>
      </div>
      <div className="props-table">
        <h1>Props</h1>
        <Table
          rowData={[
            [`rowGap`, `Number`, `Gap between the Gird Row`],
            [`colGap`, `Number`, `Gap between the Gird Column`],
            [`start`, `Number`, `Applied only on Column to specify start grid line`],
            [`end`, `Number`, `Applied only on Column to specify end grid line`],
          ]}
        />
      </div>
    </div>
  );
}

export default LayoutDocs;
