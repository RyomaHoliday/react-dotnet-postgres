import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
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
    <TableContainer component={Paper}>
      <Table  sx={{ minWidth: 650 }} >
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users &&
            users.map((user) => (
              <TableRow
                key={user.id}
              >
                <TableCell component="th" scope="row">{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.note}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default UsersList;