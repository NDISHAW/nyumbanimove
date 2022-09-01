import React, { useRef, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, useHistory } from "react-router-dom";

function SignUp() {
  const emailRef = useRef();
  const nameRef = useRef();
  const phoneRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { signupCallback, setAuth } = useContext(AuthContext);

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);

      const res = await signupCallback(
        nameRef.current.value,
        emailRef.current.value,
        phoneRef.current.value,
        passwordRef.current.value
      );

      if (res.id) {
        const newState = {
          name: res.name,
          email: res.email,
          phone: res.phone,
        };
        setAuth(newState);
        localStorage.setItem("auth", newState);
        history.push("/home");
      } else if (res.errors) {
        setError(res.errors);
      }
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <div className="bg-amber-100 signup flex">
      <div className="w-2/5 items-center mx-auto border rounded-lg p-7 shadow-2xl my-auto sign-up bg-white ">
        {error && (
          <div
            style={{
              backgroundColor: "pink",
              height: "30px",
              margin: "16px",
            }}
          >
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <h2 className="text-4xl my-5">Sign Up</h2>
          <div class="mb-6">
            <label
              for="name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your Name
            </label>
            <input
              ref={nameRef}
              type="text"
              id="name"
              class="bg-gray-50 border border-amber-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name"
              required
            />
          </div>
          <div class="mb-6">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              ref={emailRef}
              type="email"
              id="email"
              class="bg-gray-50 border border-amber-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@email.com"
              required
            />
          </div>

          <div class="mb-6">
            <label
              for="phone"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your Phone Number
            </label>
            <input
              ref={phoneRef}
              type="number"
              id="phone"
              class="bg-gray-50 border border-amber-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              placeholder="0123456789"
            />
          </div>

          <div class="mb-6">
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your password
            </label>
            <input
              ref={passwordRef}
              type="password"
              id="password"
              class="bg-gray-50 border border-amber-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              placeholder="Enter password"
            />
          </div>

          <div class="mb-6">
            <label
              for="passwordConfirm"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Confirm password
            </label>
            <input
              ref={passwordConfirmRef}
              type="passwordConfirm"
              id="passwordConfirm"
              class="bg-gray-50 border border-amber-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Confirm your password"
              required
            />
          </div>

          <button
            disabled={loading}
            type="submit"
            class="text-white bg-amber-500 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
          >
            Sign Up
          </button>
        </form>

        <div className="mb-4">
          <span className="float-right">
            <u>
              <Link to="/signin">Already have an account? Sign In</Link>
            </u>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SignUp;