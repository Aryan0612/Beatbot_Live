import React from "react";
import "./LoginPage.css";

const LoginPage = (props) => {
  return (
    <React.Fragment>
      <div className="divc">
        <div id="content">
          <img
            src="poatslogo.jpg"
            width="100px"
            height="100px"
            id="contentimg"
            alt="Poats logo"
          />
        </div>
        <form className="formc" action="">
          <div class="headingsContainer">
            <h3>Sign into POATS-The world of music</h3>
          </div>
          <div class="mainContainer">
            <label for="username">Your username</label>
            <input
              type="text"
              placeholder="Enter Username"
              name="username"
              required
            />
            <br></br>
            <br></br>
            <label for="username">Your password</label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              required
            />

            <div class="subcontainer">
              <label>
                <input type="checkbox" name="remember" /> Remember me
              </label>
              <p class="forgotpsd">
                {" "}
                <a href="#">Forgot Password?</a>
              </p>
            </div>
            <button className="buttonc" type="submit">
              Login
            </button>
            <p class="register">
              Not a member? <a href="#">Register here!</a>
            </p>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default LoginPage;
