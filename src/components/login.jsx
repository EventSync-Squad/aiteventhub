import React from "react";
import './login.css'

const Login = () => {
  return (
    <div class="main">
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Registration no.</label>
          <input
            type="number"
            class="form-control"
            id="regno"
            aria-describedby="emailHelp"
            placeholder="Enter Reg No"
          />
        </div>
        
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <br />
        <div className="text-center">
        <button type="submit" class="btn btn-primary ">
          Submit
        </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
