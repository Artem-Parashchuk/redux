import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { fetchPostsById } from "../../services/api";
import s from "./Posts.module.css";

export const Posts = () => {
  const [posts, setPosts] = useState(null);
  const { userId } = useParams();
  useEffect(() => {
    const getUserPosts = async () => {
      const dataPosts = await fetchPostsById(userId);
      setPosts(dataPosts);
    };
    getUserPosts();
  }, [userId]);
  if (!posts) {
    return <span className={s.loader}></span>;
  }
  return (
    <div className={s.wrapper_posts}>
      <h2 className={s.title}>Posts</h2>
      <div className={s.posts_and_details}>
        <ul className={s.posts_list}>
          {posts.map((post, index) => {
            return (
              <li key={post.id}>
                <Link to={`details/${post.id}`}>
                  {index + 1}. {post.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <Outlet />
      </div>
    </div>
  );
};
