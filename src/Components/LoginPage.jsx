import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const usernameElement = useRef();
  const EmailElement = useRef();
  const PasswordElememt = useRef();
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    const name = usernameElement.current.value;
    const mail = EmailElement.current.value;
    const password = PasswordElememt.current.value;
    if (
      name === "Dummyname" &&
      mail === "Dummymail@abc.com" &&
      password === "DummyPassword"
    ) {
      navigate("/MainMenu/Postlist");
    }
  }
  return (
    <>
      <main className="form-signin w-25 mx-auto  Login-main border border-dark-subtle ">
        <form onSubmit={handleSubmit}>
          <h1 className="h3 mb-3 fw-normal ">Please sign in</h1>

          <div className="form-floating field-margin  ">
            <input
              type="text"
              className="form-control"
              id="floatingIn"
              ref={usernameElement}
            />
            <label htmlFor="floatingIn">User Name</label>
          </div>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              ref={EmailElement}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating field-margin">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              ref={PasswordElememt}
            />
            <label htmlFor="floatingPassword field-margin">Password</label>
          </div>

          <button
            className="btn btn-primary w-100 py-2 field-margin"
            type="submit"
          >
            Sign in
          </button>
        </form>
      </main>
    </>
  );
}
