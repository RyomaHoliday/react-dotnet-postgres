import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import UserDataService from "../../services/UserService";
import IUserData from '../../types/User';
const UsersList = () => {
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
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} >
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>name</TableCell>
              <TableCell>note</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users &&
              users.map((user) => (
                <TableRow
                  key={user.id}
                  component="a"
                  href={"user/" + user.id}
                >
                  <TableCell component="th" scope="row">
                    {user.id}
                  </TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.note}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Paper>
        <Button
          color="primary"
          variant="contained"
          size="large"
          component={Link}
          to="/user/add"
        >
          new
        </Button>
      </Paper>
    </div>
  );
};
export default UsersList;