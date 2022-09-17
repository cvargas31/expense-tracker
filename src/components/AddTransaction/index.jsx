import React, { useState } from "react";
import { Button, Title } from "../../styles/GlobalStyles";
import { Form, FormInput, FormItem, FormLabel } from "./styles";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const handleChangeText = (e) => {
    console.log(e.target.value)
    setText(e.target.value)
  };

  const handleAmount = (e) => {
    console.log(e.target.value)
    setAmount(e.target.value)
  };

  return (
    <>
      <Title>Add new transaction</Title>
      <Form>
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
