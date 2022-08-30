
import { useState } from "react";
import "./App.css";
import Signup from "./components/auth/Signup";
import Signin from "./components/auth/Signin";
import { AuthContext } from "./context/AuthContext";
import Home from './components/home/Home';

function App() {
  // const [quote, setQuote] = useState({
  //   origin: "",
  //   destination: "",
  //   movers: "",
  //   distance: "",
  //   houseSelect: "",
  //   date: "",
  //   time: "",
  //   total: "",
  // });

  const [auth, setAuth] = useState({
    name: "",
    email: "",
    phone: ""
  });

  async function signinCallback(email, password) {
   
    const route = "https://nyumbani-move.herokuapp.com/api/login";

    console.log(route);

   return await fetch(route, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((r) => {
      console.log("inside fetch");
      return r.json()
    });
    
  }

  async function signupCallback(name, email, phone, password) {
   
    const route = "https://nyumbani-move.herokuapp.com/api/signup";

    return await fetch(route, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        password,
      }),
    }).then((r) => {
      return r.json()
    });
  }

  // function signinCallback() {
  //   console.log("perform sign in");
  // }
  // function signupCallback() {
  //   console.log("perform sign up");
  // }
  // function signoutCallback() {
  //   console.log("perform sign out");
  // }

  async function signoutCallback() {
    const route = "https://nyumbani-move.herokuapp.com/api/signout";

    await fetch(route, { method: "DELETE" })
      // .then(history.push("/"));
      .then(console.log("signed out"));
  }

  // const quoteData = {
  //   quote,
  //   setQuote,
  // };

  const authData = {
    auth,
    setAuth,
    signinCallback,
    signupCallback,
    signoutCallback,
  };

  return (
    <>
      <AuthContext.Provider value={authData}>
        {/* <QuoteContext.Provider value={quoteData}> */}
          {/* Main page goes here */}
          {/* <Container> */}
            {/* Other sections */}
            {/* get a quote */}
            
              
              {/* <Signin /> */}
              {/* <Signup/>
               */}
            <Home/>
            
            {/* get a quote ends here */}
            {/* other sections */}
            {/* </Container> */}
          {/* mainpage ends here */}
        {/* </QuoteContext.Provider> */}
      </AuthContext.Provider>
    </>
  );
}

export default App;
