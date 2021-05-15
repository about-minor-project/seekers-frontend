import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { useHistory } from "react-router-dom";

const Profile = () => {
  const history = useHistory();
  const loggedIn = window.localStorage.getItem("loggedUser");
  !loggedIn && history.push("/");
  
  const [name, setName] = useState("")
  useEffect(() => {    
    const name = window.localStorage.getItem("name")
    setName(name)
  }, [])
  return (
    <>
      <NavBar />
      <div>
        <h2>Welcome {name}!</h2>
        <p>We hope you are alive... just kidding we just don't care</p>
      </div>
    </>
  );
};
export default Profile;
