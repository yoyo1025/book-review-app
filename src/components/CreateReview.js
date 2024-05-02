import React, { useState } from "react";
import "../style/App.css";

export const CreateReview = () => {
  const [image, setImage] = useState(null); // 選択された画像の状態

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // 選択されたファイルを取得
    if (file && file.type.substr(0, 5) === "image") {
      setImage(URL.createObjectURL(file)); // 画像ファイルの場合、URLを生成して状態を更新
    } else {
      setImage(null); // 画像ファイルでない場合はnullをセット
    }
  };

  return (
    <>
      <h1>書籍を投稿する</h1>
      <hr />
      <div className="app-container">
        <div className="form-container">
          <form>
            <ul>
              <li>
                <div className="review-image">表紙</div>
                <input type="file" onChange={handleImageChange} />
                {image && (
                  <img src={image} alt="Preview" style={{ width: "30%" }} />
                )}
              </li>
              <li>
                <div className="review-title">タイトル</div>
                <input type="text" className="review-title-container" />
              </li>
              <li>
                <div className="review-comment">コメント</div>
                <textarea
                  cols="100"
                  rows="10"
                  className="review-comment-container"
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
