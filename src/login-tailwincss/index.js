import { useContext, useState } from "react";
import { AuthContext } from "../core/context/AuthContext";

//#### Tailwind Code Template
//#### https://flowbite.com/docs/components/forms/

function LoginTailWindCss() {
  const { loginUser } = useContext(AuthContext);

  const [logininfo, setlogininfo] = useState({
    email: "",
    password: "",
  });

  const handleEmailChange = (event) => {
    setlogininfo({ ...logininfo, email: event.target.value });
  };

  const handlePasswordChange = (event) => {
    setlogininfo({ ...logininfo, password: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    alert(`Usuer ${logininfo.email} is logged with success!`);
    loginUser(logininfo);
  };
  return (
    <>
      <div className="w-[1100px] mx-auto px-4 sm:px-6 lg:px-0">
        <h1 className="text-2xl text-center text-black font-bold">
          | Login Page |
        </h1>
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              onChange={handleEmailChange}
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
              onChange={handlePasswordChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login-Action
          </button>
        </form>
      </div>
    </>
  );
}

export default LoginTailWindCss;
