import styled from "styled-components";

export const TableWrapper = styled.table`
  border: 1px solid gray;
  border-collapse: collapse;
  & * th {
    border: 1px solid gray;
    padding: 5px 8px;
  }
  & * td {
    border: 1px solid gray;
    padding: 5px 8px;
  }
`;

export const Wrapper = styled.div`
  width: 1500px;
  height: 800px;
  overflow: auto;
`;
