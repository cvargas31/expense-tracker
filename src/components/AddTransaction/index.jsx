import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { Button, Title } from "../../styles/GlobalStyles";
import { Form, FormInput, FormItem, FormLabel } from "./styles";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const {addTransaction} = useContext(GlobalContext)
  const handleChangeText = (e) => {
    console.log(e.target.value)
    setText(e.target.value)
  };

  const handleAmount = (e) => {
    console.log(e.target.value)
    setAmount(e.target.value)
  };

  const onSubmit = (e) => {
    e.preventDefault()

    const newTransaction = {
      id: Math.floor(Math.random() * 10000000),
      text,
      amount: Number(amount)
    }
    addTransaction(newTransaction)
    setText("")
    setAmount(0)
  }

  return (
    <>
      <Title>Add new transaction</Title>
      <Form onSubmit={onSubmit}>
        <FormItem>
          <FormLabel htmlFor="text">Text</FormLabel>
          <FormInput type="text" id="text" value={text} onChange={handleChangeText} placeholder="Enter text..." />
        </FormItem>
        <FormItem>
          <FormLabel htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </FormLabel>
          <FormInput type="number" id="amount" value={amount} onChange={handleAmount} placeholder="Enter amount..." />
        </FormItem>
        <Button>Add transaction</Button>
      </Form>
    </>
  );
};
