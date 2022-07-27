import { Routes, Route, Link } from "react-router-dom";
import UsersList from './components/pages/UsersList';

 export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<UsersList/>} />
    </Routes>
  )
}
