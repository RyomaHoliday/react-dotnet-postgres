import { Routes, Route, Link, Navigate } from "react-router-dom";
import User from "./components/pages/User";
import UsersList from './components/pages/UsersList';

 export default function Routers() {
  return (
    <Routes>
      <Route path="/user" element={<UsersList/>} />
      <Route path="/user/add" element={<User/>} />
      <Route path="/user/:id" element={<User/>} />
      <Route path="/" element={<Navigate to="/user" />} />
    </Routes>
  )
}
