import { Routes, Route } from "react-router-dom";

import Register from "./components/Register";
import Login from "./components/Login";
import DeleteUser from "./components/user/DeleteUser";
import UserDashBoard from "./components/user/UserDashBoard";
import Library from "./components/Library";
import Book from "./components/Book";
import AddBook from "./components/admin/AddBook";
import Main from "./components/Main";
import AdminDashBoard from "./components/admin/AdminDashBoard";
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/AddBook" element={<AddBook/>}/>
          <Route path='/library' element={<Library />} />
          <Route path='/userDashBoard' element={<UserDashBoard />} />
          <Route path='/book' element={<Book />} />
          <Route path='/admin/book/add' element={<AddBook />} />
          <Route path='/deleteUser' element={<DeleteUser />} />
          <Route path='/adminDashBoard' element={<AdminDashBoard />} />
        </Route >
      </Routes>
    </>
  );
}

export default App;
