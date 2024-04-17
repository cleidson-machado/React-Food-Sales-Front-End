import apiPathUri from "../api-path";

async function userRegister(userData) {
  apiPathUri
    .post("user/create", userData)
    .then((response) => {
      if (response.status === 200) {
        alert(
          "User: " +
            response.data.name +
            " " +
            response.data.surname +
            " Was Created!"
        );
      }
      return console.log(
        "Status: " + response.status + " ID: " + response.data._id
      );
    })
    .catch((err) => {
      alert(err.response.data.message);
      console.error(
        "An error occurred: " +
          "STATUS: " +
          err.response.status +
          " " +
          "MESSAGE: " +
          err.response.data.message
      );
    });
}

export default userRegister;
