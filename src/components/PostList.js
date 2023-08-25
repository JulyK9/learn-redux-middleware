import { Link } from 'react-router-dom';

const PostsList = ({ posts }) => {
  // console.log('posts', posts);

  return (
    <ul>
      {posts?.map((post) => (
        <li key={post.id}>
          <Link to={`/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default PostsList;
