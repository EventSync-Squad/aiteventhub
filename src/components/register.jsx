import React, { useState } from "react";
import './register.css'

const Register = () => {
  const array = ["Techinal Board", "OSS", "Cultural Board", "Sports"];
  const [Club, setClub] = useState(0);
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
          <label for="exampleInputEmail1">Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            aria-describedby="emailHelp"
            placeholder="Enter name"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="dropdown mb-3 ">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenu2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {array[Club]}
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
            <li>
              <button
                className="dropdown-item"
                type="button"
                onClick={() => setClub(0)}
              >
                {array[0]}
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                type="button"
                onClick={() => setClub(1)}
              >
                {array[1]}
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                type="button"
                onClick={() => setClub(2)}
              >
                {array[2]}
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                type="button"
                onClick={() => setClub(3)}
              >
                {array[3]}
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                type="button"
                onClick={() => setClub(4)}
              >
                {array[4]}
              </button>
            </li>
          </ul>
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
        <div class="form-group">
          <label for="exampleInputPassword1">Confirm Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Confirm Password"
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

export default Register;
