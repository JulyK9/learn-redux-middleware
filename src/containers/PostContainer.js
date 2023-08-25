import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../components/Post';
import { getPostThunk } from '../modules/posts';

const PostContainer = ({ postId }) => {
  const { loading, data, error } = useSelector((state) => state.posts.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostThunk(postId));
  }, [dispatch, postId]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생</div>;
  if (!data) return null;

  return <Post post={data} />;
};

export default PostContainer;
