import React, { useState, useEffect, ChangeEvent } from "react";
import UserDataService from "../../services/UserService";
import IUserData from '../../types/User';
const UsersList: React.FC = () => {
  const [users, setUsers] = useState<Array<IUserData>>([]);
  useEffect(() => {
    retrieveUsers();
  }, []);
  const retrieveUsers = () => {
    UserDataService.getAll()
      .then((response: any) => {
        setUsers(response.data);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };
  const refreshList = () => {
    retrieveUsers();
  };
  return (
    <div>
        <h4>Users List</h4>
        <ul>
          {users &&
            users.map((user, index) => (
              <li
                key={index}
              >
                {user.name}
              </li>
            ))}
        </ul>
      </div>
  );
};
export default UsersList;