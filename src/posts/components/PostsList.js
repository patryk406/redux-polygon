import PostListElement from "./PostListElements";

const PostsList = ({ posts }) => {
  return (
    <div>
      {posts.map(post => (
        <PostListElement key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostsList;