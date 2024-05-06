import { Header } from "./Header";
import "../style/App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

export const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/books`,
          {
            withCredentials: true, // クッキーを利用する場合
          }
        );
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <>
      <Header />
      <div>
        <h1>Books</h1>
        {books.length > 0 ? (
          <ul className="book-list">
            {books.map((book) => (
              <li key={book.id} className="book">
                <h2>{book.title}</h2>
                <p>{book.comment}</p>
                {book.pictures &&
                  book.pictures.map((picture) => (
                    <img
                      src={`data:image/jpeg;base64,${picture.imageBase64}`}
                      alt="Book Cover"
                      className="book-picture"
                    />
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
