import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles.css";

function UserProfileDetails() {
  const params = useParams();
  const [userDetail, serUserDetail] = useState([]);
  useEffect(() => {
    function returnUserDetails() {
      axios
        .get(
          "https://tutorial4-api.herokuapp.com/api/users/" + params.profileId
        )
        .then((response) => {
          console.log(response);
          serUserDetail(response.data["data"]);
        });
    }

    returnUserDetails();
  }, []);
  return (
    <React.Fragment>
      <div align="center" className="container mt-5">
        <div className="row">
          <img
            className="col-md-6"
            style={{ width: "18rem" }}
            src={userDetail.picture}
            alt="profile picture"
          />
          <div className="col-md-6 mt-5">
            <p className="w-100">
              <b>Full Name: </b>
              {userDetail.title}. {userDetail.firstName} {userDetail.lastName}
            </p>
            <p className="w-100">
              <b>Email Id: </b>
              {userDetail.email}
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default UserProfileDetails;

/*
Code references:

https://blog.logrocket.com/understanding-react-fragments/
https://github.com/benwiley4000/react-dot-fragment
https://tutorial4-api.herokuapp.com/api/users/ 
https://github.com/Harshini-Kasibhotla
https://reactjs.org/docs/forms.html
https://www.geeksforgeeks.org/how-to-use-handlechange-function-in-react-component/
https://reactjs.org/docs/fragments.html

*/