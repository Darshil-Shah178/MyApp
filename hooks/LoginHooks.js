import { useState } from "react";

const useLoginForm = (callback) => {
  const [inputs, setInputs] = useState({
    username: "darshil",
    password: "darsh@302",
  });

  const handleInputChange = (name, text) => {
    // console.log(name, text);
    // console.log('inputs state', inputs);
    setInputs((inputs) => {
      return {
        ...inputs,
        [name]: text,
      };
    });
  };
  return {
    handleInputChange,
    inputs,
  };
};

export default useLoginForm;
