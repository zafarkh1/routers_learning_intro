import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Books from "./components/Books";
import Booklist from "./components/Booklist";
import NewBoooks from "./components/NewBoooks";
import NotFound from "./components/NotFound";
import BookLayout from "./components/BookLayout";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/books/"
          element={<h1>There would be your products ads</h1>}
        />
      </Routes>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Log in</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/books" element={<BookLayout />}>
          <Route index element={<Booklist />} />
          <Route path=":id" element={<Books />} />
          <Route path="new" element={<NewBoooks />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;