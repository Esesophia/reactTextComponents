import React from "react";
import { useState } from "react";
import Button from "./Button";
import Text from "./Text";
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Text type="h1" count={count} children="Clicks " />
      <Text type="h2" count={count} children="Clicks " />
      <Text type="h3" count={count} children="Clicks " />
      <Text type="h4" count={count} children="Clicks " />
      <Text type="h5" count={count} children="Clicks " />
      <Text type="h6" count={count} children="Clicks " />
      <Button
        children="decrease button"
        onClick={() => {
          setCount(count - 1);
        }}
      />
      <Button
        children="reset button"
        onClick={() => {
          setCount(0);
        }}
      />
      <Button
        children="increase button"
        onClick={() => {
          setCount(count + 1);
        }}
      />
    </>
  );
};

export default Counter;
