import React, { Component } from "react";
import LoginForm from "./LoginForm";
import ProfileListing from "./ProfileListing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserProfileDetails from "./UserProfileDetails";

class PathRouter extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/profileListing" element={<ProfileListing />} />
          <Route path="/profileDetails/:profileId" element={<UserProfileDetails />} />
        </Routes>
      </BrowserRouter>
    );
  }
} 

export default PathRouter;

/*
Code references:

https://v5.reactrouter.com/web/api/BrowserRouter

*/
