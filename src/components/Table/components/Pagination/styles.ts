//@ts-nocheck
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

Wrapper.propTypes = {
  disabled: false,
};

const defaultV = `
  color: gray;
`;

const currentV = `
  color: blue;
`;

export const PagButton = styled.div`
  padding: 5px 10px;
  border: 1px solid lightgray;
  ${({ cur }) => (cur ? currentV : defaultV)}
  cursor: pointer;
  margin-right: 5px;
  transition: all 0.3s;
  ${(props) => {
    return props.disabled ? "opacity: 0.3;" : "opacity: 1";
  }};
  &:hover {
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.15);
    color: black;
  }
`;

export const Dots = styled.div`
  margin-right: 5px;
  margin-bottom: 3px;
  color: darkgray;
`;

export const Select = styled.select`
  padding: 5px 4px;
  border: 1px solid lightgray;
  background-color: white;
  cursor: pointer;
  margin-left: 20px;
`;
