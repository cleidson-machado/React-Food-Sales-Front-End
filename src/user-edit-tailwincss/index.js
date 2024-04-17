import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import apiPathUri from "../core/services/api-path";

//## EDIT-USER
function UserEditTailWindCss() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [registerData, setRegisterData] = useState({
    name: "",
    surname: "",
    bodyheight: "",
    gender: "",
    cpf: "",
    email: "",
    password: "",
    levelAccess: "BUYER-Level",
  });

  //#### I PREFER TO USE IT LIKE THIS THAN FROM event.target.name FROM HTML
  const handleName = (event) => {
    setRegisterData({ ...registerData, name: event.target.value });
  };

  //#### I PREFER TO USE IT LIKE THIS THAN FROM event.target.name FROM HTML
  const handleSurname = (event) => {
    setRegisterData({ ...registerData, surname: event.target.value });
  };

  //#### I PREFER TO USE IT LIKE THIS THAN FROM event.target.name FROM HTML
  const handleCpf = (event) => {
    setRegisterData({ ...registerData, cpf: event.target.value });
  };

  //#### I PREFER TO USE IT LIKE THIS THAN FROM event.target.name FROM HTML
  const handleEmail = (event) => {
    setRegisterData({ ...registerData, email: event.target.value });
  };

  //#### USING AXIOS...
  const handleSubmit = async (event) => {
    event.preventDefault();
    await apiPathUri
      .put(`user/update/${id}`, registerData)
      .then((response) => {
        if (response.data) {
          alert(`User ${response.data._id} Update With Success!`);
          navigate("/users");
        }
      })
      .catch((err) => err);
  };

  useEffect(() => {
    getUserById(id);
  }, [id]);

  const getUserById = async (idValue) => {
    await apiPathUri
      .get(`user/find/${idValue}`)
      .then((response) => {
        setRegisterData(response.data);
      })
      .catch((err) => err);
  };

  if (!id) {
    return (
      <div>
        <h1>USER-EDIT-PAGE</h1>
        <p>No USER Id Was Send!</p>
      </div>
    );
  } else {
    return (
      <>
        <div className="w-[1100px] mx-auto px-4 sm:px-6 lg:px-0">
          <h1 className="text-2xl text-center text-black font-bold">
            | User Edit: <b>{id}</b> |
          </h1>
          <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="nameid"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="nameid"
                value={registerData.name}
                onChange={handleName}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Type Your Name"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="surnameid"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Surname
              </label>
              <input
                type="text"
                id="surnameid"
                value={registerData.surname}
                onChange={handleSurname}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Type Your Surname"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="cpfid"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                CPF
              </label>
              <input
                type="text"
                id="cpfid"
                value={registerData.cpf}
                onChange={handleCpf}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Type Your CPF Number"
                required
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="emailid"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="emailid"
                value={registerData.email}
                onChange={handleEmail}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="nome@seuemail.com"
                required
              />
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Ok Update One
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default UserEditTailWindCss;
