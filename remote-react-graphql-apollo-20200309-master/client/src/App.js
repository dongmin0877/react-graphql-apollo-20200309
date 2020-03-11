import React, { useState } from "react";
import { SIGN_UP } from "./queries";
import { useMutation } from "@apollo/react-hooks";
const App = () => {
  const initialState = {
    name: "",
    email: "",
    password: ""
  };
  const [formData, setFormData] = useState(initialState);
  const { name, email, password } = formData;
  const handleChange = event => {
    const {
      target: { name, value }
    } = event;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = event => {
    console.log(formData);
    event.preventDefault();
    setFormData(initialState);
  };
  const inputStyle = {
    width: "100%",
    marginBottom: "10px",
    height: "30px",
    padding: "10px",
    fontSize: "14px",
    fontWeight: "900"
  };
  const buttonStyle = {
    width: "100%",
    boxSizing: "border-box",
    padding: "20px",
    backgroundColor: "black",
    color: "white",
    fontSize: "16px",
    fontWeight: "900"
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{ width: "100%", boxSizing: "border-box", padding: "40px 60px" }}
    >
      <input
        onChange={handleChange}
        type="text"
        style={inputStyle}
        value={name}
        name={"name"}
        placeholder={"NAME"}
      />
      <input
        onChange={handleChange}
        type="text"
        style={inputStyle}
        value={email}
        name={"email"}
        placeholder={"EMAIL"}
      />
      <input
        onChange={handleChange}
        type="password"
        style={inputStyle}
        value={password}
        name={"password"}
        placeholder={"PASSWORD"}
      />
      <button style={buttonStyle}>회원가입</button>
    </form>
  );
};
export default App;
