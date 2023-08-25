import { useEffect } from 'react';
import PostsList from '../components/PostList';
import { getPostsThunk } from '../modules/posts';
import { useDispatch, useSelector } from 'react-redux';

const PostListContainer = () => {
  const { data, loading, error } = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsThunk());
  }, [dispatch]);

  // console.log('data', data);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러발생!</div>;
  if (!data) return null;

  return <PostsList posts={data} />;
};

export default PostListContainer;
