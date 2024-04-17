import { useEffect, useState } from "react";
import apiPathUri from "../core/services/api-path";
import userListing from "../core/services/user/user-listing";
import { FaTrashAlt } from "react-icons/fa";
import { FaClipboard } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

//#### To Layout TailwinCss
//Example_01: https://flowbite.com/docs/components/tables
//### Here ( getAllUsers ): I use it like this because when I tried to use the teacher way it didn't return any data!!

function UserListTailWindCss() {
  const navigate = useNavigate();
  const [users, setListUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
    //getAllUsersTest();
  }, []);

  //## Don't Work!
  // eslint-disable-next-line no-unused-vars
  const getAllUsersTest = async () => {
    const data = await userListing();
    setListUsers(data);
  };

  const getAllUsers = async () => {
    await apiPathUri
      .get("user/find")
      .then((response) => {
        setListUsers(response.data);
      })
      .catch((err) => err);
  };

  const removeUser = async (idValue) => {
    const answer = window.confirm("Are you sure about this USER deletion?");
    if (answer) {
      await apiPathUri
        .delete(`user/delete/${idValue}`)
        .then((response) => response)
        .catch((err) => err);
      getAllUsers();
    }
  };

  const editUser = (idValue) => {
    navigate(`/user-edit/${idValue}`);
  };

  return (
    <>
      <div className="w-[1100px] mx-auto px-4 sm:px-6 lg:px-0">
        <h1 className="text-2xl text-center text-black font-bold">
          | User List Page |
        </h1>

        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Surname
                </th>
                <th scope="col" className="px-6 py-3">
                  CPF
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user._id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {user.name}
                  </th>
                  <td className="px-6 py-2">{user.surname}</td>
                  <td className="px-6 py-2">{user.cpf}</td>
                  <td className="px-6 py-2">{user.email}</td>
                  <td className="px-6 py-2 items-center text-center">
                    <button
                      type="button"
                      className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      <FaClipboard
                        onClick={() => editUser(user._id)}
                        size={18}
                      />
                    </button>{" "}
                    <button
                      type="button"
                      className="px-3 py-2 text-xs font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      <FaTrashAlt
                        onClick={() => removeUser(user._id)}
                        size={18}
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default UserListTailWindCss;
