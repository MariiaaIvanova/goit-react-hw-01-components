import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  margin: 40px auto;
  border-collapse: collapse;
  border: 2px solid #5a8a51;
  background-color: #e2f2df;
`;

export const TableTr = styled.tr`
  :nth-of-type(even) {
    background-color: #bde8b5;
  }
`;

export const TableTh = styled.th`
  padding: 10px 80px;
  text-align: center;
  border-bottom: 1px solid #ddd;
  background-color: #7aad71;
  color: #ffffff;
  :not(:last-child) {
    border-right: 2px solid #5a8a51;
  }
`;

export const TableTd = styled.td`
  padding: 8px;
  text-align: center;
  border-bottom: 1px solid #ddd;
  :not(:last-child) {
    border-right: 2px solid #5a8a51;
  }
`;