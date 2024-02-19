import React, { useRef } from "react";
import "./__postForm.css";

import { useSelector, useDispatch } from "react-redux";
import { addPost } from "../../actions/post.action";
const PostForm = () => {
  const form = useRef();

  const user = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();

  const submitForm = async (event) => {
    event.preventDefault();

    const postData = {
      author: user.pseudo,
      title: form.current[0].value,
      content: form.current[1].value,
      likes: 0,
    };

    dispatch(addPost(postData));
    form.current.reset();
  };

  return (
    <div className="postform">
      <form action="" ref={form} onSubmit={(e) => submitForm(e)}>
        <input type="text" placeholder="Titre du post" />
        <textarea placeholder="Poser vos questions" />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default PostForm;
