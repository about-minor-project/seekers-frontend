import React from "react";
import NavBar from "./NavBar.js";


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
    p:{
      color: "blue",
      fontSize:"40px"
    }
};

export default function ButtonAppBar() {

return (
<>
<NavBar/>
  <p >welcome to profile</p>
  </>);
 
}
