const PostsList = ({ posts }) => {
  // console.log('posts', posts);

  return (
    <ul>
      {posts?.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default PostsList;
