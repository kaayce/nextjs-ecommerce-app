import styled from "styled-components";

const Table = styled.table`
  border-spacing: 0;
  overflow-x: auto;
  width: 100%;
  border: 1px solid ${props => props.theme.offWhite};
  thead {
    font-size: 10px;
  }
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  th {
    background-color: ${props => props.theme.red};
    color: white;
    padding: 30px;
    font-size: 1.2rem;
  }
  td,
  th {
    border-bottom: 1px solid ${props => props.theme.offWhite};
    padding: 3px;
    position: relative;

    &:last-child {
      border-right: none;
      width: 150px;
      button {
        width: 100%;
      }
    }
    label {
      display: block;
      padding: 5px 5px;
      text-align: center;
    }
  }
  tr {
    &:hover {
      background: ${props => props.theme.offWhite};
    }
  }
`;

export default Table;
