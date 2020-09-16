import React from "react";

function Table({ rowData }) {
  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
        {rowData.map((row, index) => (
          <tr key={index}>
            <td>{row[0]}</td>
            <td>{row[1]}</td>
            <td>{row[2]}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Table;
