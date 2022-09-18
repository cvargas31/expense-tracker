import styled from "styled-components";

export const TransactionItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 0 ;
`;

export const TransactionNameContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const TransactionDeleteButton = styled.button``;

export const TransactionName = styled.h3``;

export const TransactionAmount = styled.span`
  color: ${props => props.color};
`;
