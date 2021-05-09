import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignUp from "./components/signup";
import Login from "./components/login";
import Profile from "./components/profile";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Testimonial from "./components/Testimonial";
import jobSearch from "./components/jobSearch";
import Announcement from "./components/Announcement";

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
    overflow: "hidden",
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
        <Switch>
          <Route exact path='/' component={this.renderContent} />
          <Route exact path='/register' component={SignUp} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/Dashboard' component={Dashboard} />
          <Route exact path='/Home' component={Home} />
          <Route exact path='/Testimonial' component={Testimonial} />
          <Route exact path='/jobSearch' component={jobSearch} />
          <Route exact path='/Announcement' component={Announcement} />
        </Switch>
      </Router>
    );
  }
}

export default App;
