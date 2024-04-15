import { useState } from "react";

function UserTailWindCss() {
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

  const handleName = (event) => {
    setRegisterData({ ...registerData, name: event.target.value });
  };

  const handleSurname = (event) => {
    setRegisterData({ ...registerData, surname: event.target.value });
  };

  const handleCpf = (event) => {
    setRegisterData({ ...registerData, cpf: event.target.value });
  };

  const handleEmail = (event) => {
    setRegisterData({ ...registerData, email: event.target.value });
  };

  const handlePassword = (event) => {
    setRegisterData({ ...registerData, password: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:3000/v1/api/user/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerData),
    });

    if (response.status === 200) {
      alert("Create With Success");
    }

    console.log(response);
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
              htmlFor="name-id"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name-id"
              onChange={handleName}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Type Your Name"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="surname-id"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Surname
            </label>
            <input
              type="text"
              id="surname-id"
              onChange={handleSurname}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Type Your Surname"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="cpf-id"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              CPF
            </label>
            <input
              type="text"
              id="cpf-id"
              onChange={handleCpf}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Type Your CPF Number"
              required
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="email-id"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email-id"
              onChange={handleEmail}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="nome@seuemail.com"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password-id"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              id="password-id"
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

export default UserTailWindCss;
