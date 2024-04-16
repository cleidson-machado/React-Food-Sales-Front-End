import apiPathUri from "../api-path";

//## TO LEARN... About How to return Using
// https://www.digitalocean.com/community/tutorials/react-axios-react

async function userLoginAuth(userData) {
  apiPathUri
    .post("auth/login", userData)
    .then((response) => {
      if (response.status === 200) {
        alert(
          "User: " +
            response.data.user.name +
            " " +
            response.data.user.surname +
            " Was Logged!"
        );
        localStorage.setItem("userInfo", JSON.stringify(response.data));
      }
      console.log(
        "Status: " +
          response.status +
          " TOKEN: " +
          JSON.stringify(response.data.token)
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

export default userLoginAuth;
