import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import SignUp from "../pages/sign Up";
import Header from "../layout/header";
import AddBook from "../pages/add_book";
import EditBook from "../pages/edit_book";

const RouterPage = () => {
  return (
    <>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/edit-book/:id" element={<EditBook />} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default RouterPage;
