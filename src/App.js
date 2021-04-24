import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";
import NavBar from "./components/NavBar";

const styles = {
  main: {
    backgroundColor: "#282c34",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
  },
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: null,
      loading: false,
    };
  }
  renderContent = () => {
    if (this.state.loggedIn === false) {
      return (
        <div style={styles.main}>
          <SignUp />
        </div>
      );
    } else {
      return (
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            display: "flex",
          }}
        >
          <Login />
        </div>
      );
    }
  };

  render() {
    return (
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={this.renderContent} />
          <Route exact path="/register" component={SignUp} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </Router>
    );
  }
}

export default App;
