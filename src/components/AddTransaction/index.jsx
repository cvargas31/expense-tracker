import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { useInputValue } from "../../hooks/useInputValue";
import { Button, Title } from "../../styles/GlobalStyles";
import { Form, FormContainer, FormInput, FormItem, FormLabel } from "./styles";

export const AddTransaction = () => {
  const text = useInputValue("")
  const amount = useInputValue(0)
  const {addTransaction} = useContext(GlobalContext)

  const onSubmit = (e) => {
    e.preventDefault()

    const newTransaction = {
      id: Math.floor(Math.random() * 10000000),
      text: text.value,
      amount: Number(amount.value)
    }
    addTransaction(newTransaction)
    text.setValue("")
    amount.setValue(0)
  }

  return (
    <FormContainer>
      <Title>Add new transaction</Title>
      <Form onSubmit={onSubmit}>
        <FormItem>
          <FormLabel htmlFor="text">Text</FormLabel>
          <FormInput type="text" id="text" {...text} placeholder="Enter text..." />
        </FormItem>
        <FormItem>
          <FormLabel htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </FormLabel>
          <FormInput type="number" id="amount" {...amount} placeholder="Enter amount..." />
        </FormItem>
        <Button>Add transaction</Button>
      </Form>
    </FormContainer>
  );
};
