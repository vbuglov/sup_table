import React from "react";
import { randKey } from "../funcs";
import { iColumn } from "../interfaces";

interface iProps {
  columns: iColumn[][];
  dataSource: Array<any | null>;
}

const Header = ({ columns, dataSource }: iProps) => {
  return (
    <thead>
      {columns.map((tr) => (
        <tr key={randKey()}>
          {tr.map(({ title, key }) => (
            <th key={`${key}`}>{title}</th>
          ))}
        </tr>
      ))}
    </thead>
  );
};

export default Header;
