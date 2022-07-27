import http from "../http-common";
import IUserData from "../types/User";
const getAll = () => {
  return http.get<Array<IUserData>>("/user");
};
const get = (id: any) => {
  return http.get<IUserData>(`/user/${id}`);
};
const insert = (data: IUserData) => {
  return http.post<IUserData>("/user", data);
};
const update = (id: any, data: IUserData) => {
  return http.put<any>(`/user/${id}`, data);
};
const remove = (id: any) => {
  return http.delete<any>(`/user/${id}`);
};

const UserService = {
  getAll,
  get,
  insert,
  update,
  remove
};
export default UserService;