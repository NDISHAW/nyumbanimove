import { useState, useEffect } from "react";
import "./App.css";
import Signup from "./components/auth/Signup";
import Signin from "./components/auth/Signin";
import { AuthContext } from "./context/AuthContext";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/home/Home";
import PrivateRoute from "./components/PrivateRoute";
import Landin from "./components/home/Landin";
// import AdminRoute from "./components/AdminRoute";
// import Admin from "./components"

// import FourOhFour from "./components/FourOhFour";

function App() {
  const [auth, setAuth] = useState({
    name: null,
    email: null,
    phone: null,
    // isAdmin: false
  });

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth) {
      setAuth(auth);
      
    }
  }, [auth]);

  async function signinCallback(email, password) {
    // const route = "https://nyumbani-move.herokuapp.com/api/login";
    const route = "http://localhost:3000/api/bookings";//local host link

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
      return r.json();
    })
    .then(data=>data);
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
      return r.json();
    });
  }

  async function signoutCallback() {
    const route = "https://nyumbani-move.herokuapp.com/api/signout";

    await fetch(route, { method: "DELETE" });
    setAuth({
      name: null,
      email: null,
      phone: null,
    });
    localStorage.clear();
  }

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
        <div className="App w-full">
          <main>
            <Router>
              <Switch>
                <PrivateRoute path="/home" component={Home} />
                <Route exact path="/" component={Landin} />
                <Route path="/signup" component={Signup} />
                <Route path="/signin" component={Signin} />
                {/* <AdminRoute path="/admin" component={Admin} /> */}
              </Switch>
            </Router>
          </main>
        </div>
      </AuthContext.Provider>
    </>
  );
}

export default App;