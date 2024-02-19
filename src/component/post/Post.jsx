import React, { useState } from "react";
import "./__post.css";

import img from "../../assets/img/img-1.jpg";
import { deletePost, editPost, likePost } from "../../actions/post.action";
import { useDispatch } from "react-redux";
import { likeUserPost } from "../../actions/user.action";
const Post = ({ post, user }) => {
  const [isEdit, setEdit] = useState(false);
  const [value, setValue] = useState(post.content);
  const handleClick = () => setEdit(!isEdit);

  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    const postData = {
      author: post.author,
      title: post.title,
      content: value,
      likes: 0,
      id: post.id,
    };

    dispatch(editPost(postData));
    setEdit(false);
  }

  function handledelete(postID) {
    dispatch(deletePost(postID));
  }

  function handleLike() {
    const postLiked = {
      author: post.author,
      title: post.title,
      content: value,
      likes: post.likes + 1,
      id: post.id,
    };
    const userLikePost = {
      pseudo: user.pseudo,
      likes: user.likes + 1,
      age: user.age,
      id: user.id,
    };

    dispatch(likePost(postLiked));
    dispatch(likeUserPost(userLikePost));
  }

  function handleChange(params) {
    setValue(params.target.value);
  }
  return (
    <div className="mainpost">
      <div className="header-post">
        <h1>{post.title}</h1>
        <div className="button-container">
          {user.pseudo === post.author ? (
            <>
              <button onClick={handleClick}>Edit</button>
              <button onClick={() => handledelete(post.id)}>Delete</button>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="content-post-img">
        <img src={img} alt="" />
      </div>
      {isEdit && (
        <div className="form-edit-container">
          <form
            action="
  "
            className="form-edit"
            onSubmit={(e) => handleSubmit(e)}
          >
            <textarea
              name="edit"
              id=""
              autoFocus={true}
              value={value}
              onChange={handleChange}
              placeholder="Modification du post"
            ></textarea>
            <button type="submit">Modifier</button>
          </form>
        </div>
      )}
      {!isEdit && (
        <div className="article">
          <p>{post.content}</p>
        </div>
      )}
      <div className="footer">
        <p>Author:{post.author}</p>
        <p
          style={{
            cursor: "pointer",
          }}
          onClick={handleLike}
        >
          Like :{post.likes}
        </p>
      </div>
    </div>
  );
};

export default Post;
