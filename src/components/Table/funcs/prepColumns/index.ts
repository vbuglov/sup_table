import { iTableProps } from "../../interfaces";
import { cond, is, T } from "ramda";
import withoutColumns from "./withoutColumns";
import withoutChildrens from "./withoutChildrens";
import { iReturn } from "./interface";

const prepColumns = ({ columns, dataSource }: iTableProps): iReturn => {
  return cond([
    [() => !columns, () => withoutColumns(dataSource)],
    [
      () =>
        is(Array, columns) &&
        //@ts-ignore
        columns?.filter((el) => el?.children).length === 0,
      //@ts-ignore
      () => withoutChildrens(columns),
    ],
    [
      T,
      () => ({
        header: [[]],
        columns: [],
      }),
    ],
    [
      T,
      () => ({
        header: [[]],
        columns: [],
      }),
    ],
  ])();
};

export default prepColumns;
