import { Button, Container, Grid, Stack, TextField } from "@mui/material"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserService from "../../services/UserService";
import IUserData from "../../types/User";

const User = () => {
  const initialUserState = {
    id: 0,
    name: "",
    note: ""
  };

  const [currentUser, setCurrentUser] = useState<IUserData>(initialUserState);
  const { id }= useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (id && id !== "add")
      getUser(id);
  }, [id]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCurrentUser({ ...currentUser, [name]: value });
  };

  const getUser = (id: string) => {
    UserService.get(id)
      .then((response: any) => {
        setCurrentUser(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const updateUser = () => {
    if (id && id !== "add") {
      UserService.update(currentUser.id, currentUser)
      .then((response: any) => {
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
    } else {
      UserService.insert(currentUser)
      .then((response: any) => {
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
    }
    navigate("/user");
  };

  return (
    <Container maxWidth="sm" sx={{ pt: 5 }}>
      <Stack spacing={3}>
        <TextField disabled required name="id" label="id" value={currentUser.id} onChange={handleInputChange} />
        <TextField required name="name" label="名前" value={currentUser.name} onChange={handleInputChange} />
        <TextField name="note" label="ノート" value={currentUser.note} onChange={handleInputChange} />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Button
              color="primary"
              variant="outlined"
              size="large"
              onClick={() => navigate(-1)}
            >
              Cancel
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              color="primary"
              variant="contained"
              size="large"
              onClick={updateUser}
            >
              Update
            </Button>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  )
}
export default User;
