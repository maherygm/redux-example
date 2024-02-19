import "./app.css";
import Post from "./component/post/Post";
import PostForm from "./component/postForm/PostForm";
import User from "./component/user/User";

import { useSelector } from "react-redux";
import { isEmpty } from "./utils/utils";
function App() {
  const posts = useSelector((selector) => selector.postReducer);
  const user = useSelector((selector) => selector.userReducer);
  return (
    <div className="App">
      <>{!isEmpty(user) && <User user={user} />}</>
      <>
        <PostForm />
      </>
      <>
        {!isEmpty(posts) &&
          posts.map((post, index) => (
            <Post post={post} user={user} key={index} />
          ))}
      </>
    </div>
  );
}

export default App;
