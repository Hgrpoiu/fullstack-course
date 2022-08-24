import React, { useState } from "react";

export function useField(type) {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  function reset(){
    setValue('')
  }

  return { input:{type, value, onChange},reset };
}
