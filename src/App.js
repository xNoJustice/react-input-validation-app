import React, { useState } from "react";
import logo from "./logo.svg";
import "./logo.css";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const isEmail = (email) => {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  };

  const handleSubmit = () => {
    const usernameValue = username.trim();
    const emailValue = email.trim();
    const passwordValue = password.trim();

    if (usernameValue === "") {
      setUsernameError("Username can't be blank");
    } else {
      setUsernameError(false);
    }

    if (emailValue === "") {
      setEmailError("Email can't be blank");
    } else if (!isEmail(emailValue)) {
      setEmailError("Not a valid email");
    } else {
      setEmailError(false);
    }

    if (passwordValue === "") {
      setPasswordError("Password can't be blank");
    } else {
      setPasswordError(false);
    }
  };
  return (
    <div className="w-full h-screen mx-auto p-6 flex flex-col items-center justify-center">
      <div className="flex flex-col px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-xl shadow-2xl w-full max-w-md border-l-4 border-purple-600">
        <img src={logo} className="logo mx-auto" alt="logo" />
        <div className="font-medium self-center text-xl uppercase w-40 text-center bg-purple-600 shadow-2xl py-2 rounded-full text-white">
          Sign Up
        </div>
        <div className="mt-10">
          <div className="relative w-full mb-8">
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={`${
                usernameError === false
                  ? "ring-green-500 ring-2"
                  : usernameError !== "" && "ring-red-500 ring-2"
              } rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`}
              placeholder="Username"
              style={{ transition: "all 0.15s ease 0s" }}
            />
            {!usernameError && usernameError !== "" ? (
              <svg
                className="absolute text-green-500 right-2 bottom-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                width="30"
                height="30"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              usernameError !== "" && (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="absolute text-red-500 right-2 bottom-3"
                    viewBox="0 0 1792 1792"
                  >
                    <path d="M1024 1375v-190q0-14-9.5-23.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 23.5v190q0 14 9.5 23.5t22.5 9.5h192q13 0 22.5-9.5t9.5-23.5zm-2-374l18-459q0-12-10-19-13-11-24-11h-220q-11 0-24 11-10 7-10 21l17 457q0 10 10 16.5t24 6.5h185q14 0 23.5-6.5t10.5-16.5zm-14-934l768 1408q35 63-2 126-17 29-46.5 46t-63.5 17h-1536q-34 0-63.5-17t-46.5-46q-37-63-2-126l768-1408q17-31 47-49t65-18 65 18 47 49z"></path>
                  </svg>

                  <p className="absolute text-sm text-red-500 -bottom-6">
                    {usernameError}
                  </p>
                </>
              )
            )}
          </div>
          <div className="relative w-full my-8">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`${
                emailError === false
                  ? "ring-green-500 ring-2"
                  : emailError !== "" && "ring-red-500 ring-2"
              } rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`}
              placeholder="Email"
              style={{ transition: "all 0.15s ease 0s" }}
            />

            {!emailError && emailError !== "" ? (
              <svg
                className="absolute text-green-500 right-2 bottom-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                width="30"
                height="30"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              emailError !== "" && (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="absolute text-red-500 right-2 bottom-3"
                    viewBox="0 0 1792 1792"
                  >
                    <path d="M1024 1375v-190q0-14-9.5-23.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 23.5v190q0 14 9.5 23.5t22.5 9.5h192q13 0 22.5-9.5t9.5-23.5zm-2-374l18-459q0-12-10-19-13-11-24-11h-220q-11 0-24 11-10 7-10 21l17 457q0 10 10 16.5t24 6.5h185q14 0 23.5-6.5t10.5-16.5zm-14-934l768 1408q35 63-2 126-17 29-46.5 46t-63.5 17h-1536q-34 0-63.5-17t-46.5-46q-37-63-2-126l768-1408q17-31 47-49t65-18 65 18 47 49z"></path>
                  </svg>

                  <p className="absolute text-sm text-red-500 -bottom-6">
                    {emailError}
                  </p>
                </>
              )
            )}
          </div>
          <div className="relative w-full my-8">
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`${
                passwordError === false
                  ? "ring-green-500 ring-2"
                  : passwordError !== "" && "ring-red-500 ring-2"
              } rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`}
              placeholder="Password"
              style={{ transition: "all 0.15s ease 0s" }}
            />

            {!passwordError && passwordError !== "" ? (
              <svg
                className="absolute text-green-500 right-2 bottom-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                width="30"
                height="30"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              passwordError !== "" && (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="absolute text-red-500 right-2 bottom-3"
                    viewBox="0 0 1792 1792"
                  >
                    <path d="M1024 1375v-190q0-14-9.5-23.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 23.5v190q0 14 9.5 23.5t22.5 9.5h192q13 0 22.5-9.5t9.5-23.5zm-2-374l18-459q0-12-10-19-13-11-24-11h-220q-11 0-24 11-10 7-10 21l17 457q0 10 10 16.5t24 6.5h185q14 0 23.5-6.5t10.5-16.5zm-14-934l768 1408q35 63-2 126-17 29-46.5 46t-63.5 17h-1536q-34 0-63.5-17t-46.5-46q-37-63-2-126l768-1408q17-31 47-49t65-18 65 18 47 49z"></path>
                  </svg>

                  <p className="absolute text-sm text-red-500 -bottom-6">
                    {passwordError}
                  </p>
                </>
              )
            )}
          </div>
          <div className="text-center mt-6">
            <button
              onClick={() => handleSubmit()}
              className="px-3 py-2 rounded-lg bg-purple-600 outline-none text-white shadow w-full justify-center focus:bg-purple-700 hover:bg-purple-500"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
