import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/App.css";
import { Link, useParams } from "react-router-dom";
import HeaderForSearchUser from "./HeaderForSearchUser";

export const UserProfile = () => {
  const { userId } = useParams();
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");


  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/userbooks/${userId}`, { withCredentials: true });
        setBooks(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <>
      <HeaderForSearchUser searchQuery={searchQuery} onSearchChange={(e) => setSearchQuery(e.target.value)} />
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
                    <Link to={`/userbooks/${userId}/${book.id}`}>
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

export default UserProfile;
