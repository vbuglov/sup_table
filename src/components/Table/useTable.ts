import { useState } from "react";

interface iProps {
  getData: Function;
}

const useTable = (props: iProps) => {
  const [dataSource, setDataSource] = useState({});
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState({});
  const [currentPage, cCurrentPage] = useState(1);
  const [countPages, cCountPages] = useState(8);
  const [recordsCountOnPage, cRecordsCountOnPage] = useState(10);

  const next = () => {
    currentPage < countPages && cCurrentPage(currentPage + 1);
  };

  const prev = () => {
    currentPage > 1 && cCurrentPage(currentPage - 1);
  };

  const cPage = (page: number) => {
    cCurrentPage(page);
  };

  return {
    next,
    prev,
    dataSource,
    setDataSource,
    filter,
    setFilter,
    sort,
    setSort,
    currentPage,
    cCountPages,
    cCurrentPage,
    countPages,
    recordsCountOnPage,
    cRecordsCountOnPage,
    cPage,
  };
};

export default useTable;
