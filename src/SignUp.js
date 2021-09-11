import React from "react";

const SignUp = () => {
  return (
    <div className="form">
      <form className="shadow-sm">
        <h4>SIGN UP</h4>
        <div className="border-2">
          <div>
            <label for="fname">Full Name :</label>
            <input
              type="text"
              name="name"
              className="name"
              id="fname"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label for="dob" className="m-tb">
              Date of Birth :
            </label>
            <input
              type="date"
              name="expected"
              className="expected m-tb"
              id="dob"
              placeholder="dd/mm/yyyy"
              required
            />
          </div>

          <div>
            <label for="gender">Gender :</label>
            <select name="gender" className="gender" placeholder="Gender" id="gender">
              <option></option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label for="address" className="m-tb">
              Address :
            </label>
            <input
              type="text"
              name="band"
              className="band m-tb"
              id="address"
              placeholder="Enter your address"
              required
            />
          </div>

          <div>
            <label for="email" className="m-b">
              Email :
            </label>
            <input
              type="text"
              name="band"
              className="band m-b"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label for="phone">Phone Number :</label>
            <input
              type="text"
              name="band"
              className="band"
              id="phone"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div>
            <button type="submit" className="btn shadow-sm m-t">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
