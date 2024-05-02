import React, { useState } from "react";
import axios from "axios";
import "../style/App.css";

export const CreateReview = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.substr(0, 5) === "image") {
      setImage(file);
    } else {
      setImage(null);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // フォームのデフォルト送信を防ぐ

    // 画像を送信
    if (image) {
      const formData = new FormData();
      formData.append("image", image);
      try {
        await axios.post("http://localhost:8080/books/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      } catch (error) {
        console.error("Error uploading image", error);
      }
    }

    // タイトルとコメントを送信
    try {
      await axios.post("http://localhost:8080/books", { title, comment });
    } catch (error) {
      console.error("Error posting review", error);
    }
  };

  return (
    <>
      <h1>書籍を投稿する</h1>
      <hr />
      <div className="app-container">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <ul>
              <li>
                <div className="review-image">表紙</div>
                <input type="file" onChange={handleImageChange} />
                {image && (
                  <img
                    src={URL.createObjectURL(image)}
                    alt="Preview"
                    style={{ width: "30%" }}
                  />
                )}
              </li>
              <li>
                <div className="review-title">タイトル</div>
                <input
                  type="text"
                  className="review-title-container"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </li>
              <li>
                <div className="review-comment">コメント</div>
                <textarea
                  cols="100"
                  rows="10"
                  className="review-comment-container"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
              </li>
            </ul>
            <input type="submit" className="review-submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateReview;
