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

    // ユーザーに送信確認を求める
    if (!window.confirm('送信してよろしいですか？')) {
      return; // ユーザーがキャンセルを選択した場合、送信を中止
    }

    // 画像を送信
    if (image) {
      const formData = new FormData();
      formData.append("image", image);
      try {
        await axios.post(
          `${process.env.REACT_APP_API_URL}/books/upload`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      } catch (error) {
        console.error("Error uploading image", error);
      }
    }

    // タイトルとコメントを送信
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/books`, {
        title,
        comment,
      });
      if (response != null) {
       window.alert("送信完了しました。") 
       console.log("Review submitted successfully", response);
      }
    } catch (error) {
      console.error("Error posting review", error);
    }
  };

  return (
    <>
      <h1>書籍を投稿する</h1>
      <hr />
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
    </>
  );
};

export default CreateReview;
