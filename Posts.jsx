import React from "react";
import Post from "../../post/Post";
import "./posts.css";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import { getCurrentUser } from "../../utils/storage";

export default function Posts() {
  const posts = JSON.parse(localStorage.getItem("posts"));
  const user = getCurrentUser();

  let postContent;

  if (!posts || posts.length === 0) {
    postContent = (
      <div className="noPost">
        <h1>No posts</h1>
        {user && (
          <Link className="link" to="/write">
            <i className="icon fa-solid fa-plus"></i>
          </Link>
        )}
      </div>
    );
  } else {
    postContent = posts.map((post) => (
      <Post
        key={post.id || nanoid()}
        id={post.id || nanoid()}
        img={post.image}
        tags={post.tags}
        title={post.title}
        description={post.description}
      />
    ));
  }

  return <div className="posts">{postContent}</div>;
}
