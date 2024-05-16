import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPostById } from "../../services/api";
import s from "./PostDetails.module.css";

export const PostDetails = () => {
  const { postId } = useParams();
  const [post, setPosts] = useState(null);
  useEffect(() => {
    const getPost = async () => {
      const res = await fetchPostById(postId);
      setPosts(res);
    };
    getPost();
  }, [postId]);
  if (!post) {
    return <span className={s.loader}></span>;
  }
  return (
    <div className={s.details}>
        <h1 className={s.title}>Details</h1>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <p>Reactions: {post.reactions}</p>
    </div>
  );
};
