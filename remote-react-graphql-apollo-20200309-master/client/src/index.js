import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Mypage from "./pages/Mypage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
// Apollo
import { apollo } from "./apollo";
import { ApolloProvider } from "react-apollo";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
ReactDOM.render(
  <ApolloProvider client={apollo}>
    <Router>
      <Header />
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/signup"} exact component={Signup} />
        <Route path={"/signin"} exact component={Signin} />
        <Route path={"/mypage"} exact component={Mypage} />
        <Redirect to={"/"} from={"*"} />
      </Switch>
    </Router>
    <ToastContainer autoClose={6000} draggable position={"bottom-center"} />
  </ApolloProvider>,
  document.getElementById("root")
);
