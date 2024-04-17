import { useState } from "react";
import userRegister from "../core/services/user/user-register";
import { useNavigate } from "react-router-dom";

//#### I PREFER TO USE IT LIKE THIS THAN FROM event.target.name FROM HTML...
//EXAMPLE event.target.name FROM HTML: https://blog.logrocket.com/how-to-use-axios-post-requests/

//#### The New Age Axios Setup: Separation of Concerns in React
// LINK: https://www.dhiwise.com/post/the-new-age-axios-aetup-separation-of-concerns-in-react
// LINK: https://axios-http.com/docs/multipart

//#### React best practices and patterns
// LINK: https://devsmitra.medium.com/react-best-practices-and-patterns-to-reduce-code-part-3-543b8cef9954
// LINK: https://blog.bitsrc.io/api-call-in-react-using-axios-handling-complicated-scenarios-befff1655abc

//#### To Layout TailwinCss
//Example_01: https://flowbite.com/docs/components/tables
//Example_02: https://flowbite.com/docs/components/forms

function UserRegisterTailWindCss() {
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

  //#### I PREFER TO USE IT LIKE THIS THAN FROM event.target.name FROM HTML
  const handlePassword = (event) => {
    setRegisterData({ ...registerData, password: event.target.value });
  };

  //#### USING AXIOS...
  const handleSubmit = async (event) => {
    event.preventDefault();
    await userRegister(registerData);
    navigate("/");
  };

  return (
    <>
      <div className="w-[1100px] mx-auto px-4 sm:px-6 lg:px-0">
        <h1 className="text-2xl text-center text-black font-bold">
          | User Registration |
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
              onChange={handleEmail}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="nome@seuemail.com"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="passwordid"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              id="passwordid"
              onChange={handlePassword}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Ok Save One
          </button>
        </form>
      </div>
    </>
  );
}

export default UserRegisterTailWindCss;
