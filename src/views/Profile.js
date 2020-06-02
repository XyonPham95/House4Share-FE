import React, { useState, useEffect } from "react";

export default function Profile(props) {
  const [userProfile, setUserProfile] = useState({});
  useEffect(() => {
    getUserProfile();
  }, []);

  const getUserProfile = async () => {
    const res = await fetch(process.env.REACT_APP_SERVER + "/users/profile", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const body = await res.json();
    setUserProfile(body.data);
  };

  const handleChange = (e) => {
    setUserProfile({ ...userProfile, [e.target.name]: e.target.value });
  };

  const updateProfile = async (e) => {
    e.preventDefault();
    const res = await fetch(process.env.REACT_APP_SERVER + "/users/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(userProfile),
    });
    const body = await res.json();
    if (res.status === 202) {
      alert("Post successfully");
    } else {
      alert(`${body.error}`);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h4>My profile</h4>
      <p>Manage profile to save your account</p>
      <hr />
      <div>
        <form onChange={handleChange} onSubmit={updateProfile}>
          <div class="form-group ">
            <label for="inputEmail4">Email</label>
            <input
              type="email"
              class="form-control"
              value={userProfile.email}
              id="inputEmail4"
              placeholder="Email"
              disabled
            />
          </div>
          <div class="form-group ">
            <label for="inputName4">Name</label>
            <input
              type="text"
              value={userProfile.name}
              class="form-control"
              id="inputName4"
              placeholder="Name"
              disabled
            />
          </div>

          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="inputAddress">Address</label>
              <input
                name="address"
                value={userProfile.address}
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="111 ST"
              />
            </div>
            <div class="form-group col-md-4">
              <label for="inputGender">Gender</label>
              <input
                name="gender"
                value={userProfile.gender}
                type="text"
                class="form-control"
                id="inputGender"
                placeholder="Gender"
              />
            </div>
            <div class="form-group col-md-4">
              <label for="inputDOB">Date of Birth</label>
              <input
                name="dob"
                value={userProfile.dob}
                type="text"
                class="form-control"
                id="inputDOB"
                placeholder="DD/MM/YYYY"
              />
            </div>
          </div>

          <button
            style={{ backgroundColor: "#FF0000" }}
            type="submit"
            class="btn text-white"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
