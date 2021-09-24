//@ts-nocheck

interface iColumn {
  render?: Function;
  key?: String;
  title: String;
  dataIndex: String;
}

interface iColumns {
  column: iColumn[][];
}

interface iTableProps {
  columns?: Array<iColumn | String> | null;
  caption?: String;
  dataSource: Array<any | null>;
}

export { iTableProps, iColumn, iColumns };
