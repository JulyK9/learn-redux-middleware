// import { useParams } from 'react-router-dom';
import PostContainer from '../containers/PostContainer';
import { useParams } from 'react-router-dom';

const PostPage = () => {
  // const params = useParams()
  const { id } = useParams();
  const postId = parseInt(id);

  console.log('params: ', postId);

  return <PostContainer postId={postId} />;
};

export default PostPage;
