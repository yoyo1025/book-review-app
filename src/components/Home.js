import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";
import { Header } from "./Header";
import "../style/App.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const [books, setBooks] = useState([]);
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const fetchUser = async () => {
      const userId = localStorage.getItem("userId");
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/user/${userId}`);
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    if (isAuthenticated) {
      fetchUser();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/books`, { withCredentials: true });
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <>
      <Header username={user ? user.username : null} searchQuery={searchQuery} onSearchChange={(e) => setSearchQuery(e.target.value)} />
      <div>
        <h1>Books</h1>
        {filteredBooks.length > 0 ? (
          <ul className="book-list">
            {filteredBooks.map((book) => (
              <li key={book.id} className="book">
                <h2>{book.title}</h2>
                <p>{book.comment}</p>
                {book.pictures &&
                  book.pictures.map((picture) => (
                    <Link to={`/books/${book.id}`}>
                      <img
                        src={`data:image/jpeg;base64,${picture.imageBase64}`}
                        alt="Book Cover"
                        className="book-picture"
                      />
                    </Link>
                  ))}
              </li>
            ))}
          </ul>
        ) : (
          <p>No books found</p>
        )}
      </div>
    </>
  );
};

export default Home;
