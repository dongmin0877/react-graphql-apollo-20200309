import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { SIGN_UP_USER } from "../../queries";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
const Signup = props => {
  const initialState = {
    name: "",
    email: "",
    password: ""
  };
  const [signupFn] = useMutation(SIGN_UP_USER, {
    onCompleted({ signup }) {
      // 회원가입 실패
      if (!signup.success) {
        toast.error(signup.error);
        return;
      }
      // 회원가입 성공
      else {
        const token = signup.data;
        localStorage.setItem("tama", token);
        toast.info("회원가입성공");
        props.history.push("/");
        return;
      }
    }
  });
  const [formData, setFormData] = useState(initialState);
  const [isForm, setIsForm] = useState(false);
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
  const handleSubmit = async event => {
    try {
      event.preventDefault();
      await signupFn({
        variables: {
          name: name,
          email: email,
          password: password
        }
      });
      setFormData(initialState);
      setIsForm(true);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>회원가입</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          boxSizing: "border-box",
          padding: "40px 60px"
        }}
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
    </div>
  );
};
const inputStyle = {
  width: "100%",
  marginBottom: "10px",
  height: "30px",
  padding: "32px",
  fontSize: "14px",
  fontWeight: "900",
  boxSizing: "border-box"
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
export default withRouter(Signup);
