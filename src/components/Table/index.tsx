import React from "react";
import { Header, Footer, Body } from "./components/";
import Pagination from "./components/Pagination/index";
import { iTableProps } from "./interfaces";
import { prepColumns } from "./funcs";
import { TableWrapper } from "./styles";
import { Wrapper } from "./styles";
import useTable from "./useTable";

const Table = (props: iTableProps) => {
  const { header, columns } = prepColumns(props);
  const { caption } = props;

  const table = useTable({
    getData: () => {},
  });

  return (
    <>
      <Wrapper>
        <TableWrapper>
          {caption && <caption>{caption}</caption>}
          <Header {...props} columns={header} />
          <Body {...props} columns={columns} />
          <Footer />
        </TableWrapper>
      </Wrapper>
      <Pagination {...table} />
    </>
  );
};

export default Table;
export { default as useTable } from "./useTable";
