import { keys, pipe, map } from "ramda";
import { iReturn } from "./interface";

const withoutColumns = (dataSource: Array<any>): iReturn => {
  const firstItem = dataSource[0] || {};

  return pipe(
    keys,
    map((el) => ({
      title: el,
      key: el,
      dataIndex: el,
    })),
    (x) => [x],
    (x) => ({
      header: x,
      columns: x[0],
    })
  )(firstItem);
};

export default withoutColumns;
