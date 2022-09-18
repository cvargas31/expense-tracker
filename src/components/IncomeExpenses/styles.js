import styled from "styled-components";

export const IncomeExpenseContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 25px;
  align-items: center;
  margin-top: 25px ;
`

export const IncomeExpense = styled.div`
  border: 2px solid #e2e7f8;
  border-radius: 10px;
  width: 175px;
  display: flex;
  gap: 5px ;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
`
export const IncomeExpenseTitle = styled.p`
  color: #abb2c5;
  font-size: 14px;
`

export const IncomeExpenseAmount = styled.h3`
  color: #2f2d51;
`