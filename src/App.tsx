import React from "react";
import "./tooltip.css";
import "./App.css";
import { Table } from "./components";
import json from "./data";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Table columns={["number", "rawDataDbTable", "id"]} dataSource={json} />
      </header>
    </div>
  );
}

export default App;
