import { iColumn } from "../../interfaces";
import { is } from "ramda";
import { iReturn } from "./interface";

const withoutChildrens = (columns: iColumn[]): iReturn => {
  const cols = columns?.map((el) =>
    is(String, el)
      ? {
          title: el,
          key: el,
          dataIndex: el,
        }
      : el
  );
  return {
    header: [cols],
    columns: cols,
  };
};

export default withoutChildrens;
