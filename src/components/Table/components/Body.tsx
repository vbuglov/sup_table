import React from "react";
import { iColumn } from "../interfaces";

interface iProps {
  columns: iColumn[];
  dataSource: Array<any>;
}

const renderCell = ({ render, tr, dataIndex }: any): any =>
  !render
    ? //@ts-ignore
      JSON.stringify(tr[dataIndex])
    : //@ts-ignore
      render(JSON.stringify(tr[dataIndex], tr));

const Body = ({ columns, dataSource }: iProps) => {
  return (
    <tbody>
      {dataSource.map((tr) => (
        <tr>
          {columns.map((td) => (
            <td>{renderCell({ tr, ...td })}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default Body;
