import * as postAPI from '../api/posts'; // api/posts 안의 함수 모두 불러오기
import {
  createPromiseThunk,
  handleAsyncActions,
  reducerUtils,
} from '../lib/asyncUtils';

// 액션 타입

// 포스트 여러개 조회
const GET_POSTS = 'GET_POSTS'; // 요청 시작
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'; // 요청 성공
const GET_POSTS_ERROR = 'GET_POSTS_ERROR'; // 요청 실패

// 포스트 하나 조회
const GET_POST = 'GET_POST'; // 요청 시작
const GET_POST_SUCCESS = 'GET_POST_SUCCESS'; // 요청 성공
const GET_POST_ERROR = 'GET_POST_ERROR'; // 요청 실패

// thunk 사용시, 모든 액션들에 대해 액션 생성자함수를 만들 필요는 없음
// thunk 함수에서 바로 액션 객체를 만들어줘도 괜찮음
// export const getPostsThunk = () => async (dispatch) => {
//   dispatch({ type: GET_POSTS }); // 요청 시작

//   try {
//     const posts = await postAPI.getPosts(); // API 호출
//     dispatch({ type: GET_POSTS_SUCCESS, posts }); // 성공
//   } catch (err) {
//     dispatch({ type: GET_POSTS_ERROR, error: err }); // 실패
//   }
// };
export const getPostsThunk = createPromiseThunk(GET_POSTS, postAPI.getPosts);

// thunk 함수에서도 인자를 받아와서 사용할 수 있음
// export const getPostThunk = (id) => async (dispatch) => {
//   dispatch({ type: GET_POST }); // 요청 시작

//   try {
//     const post = await postAPI.getPostById(id); // API 호출
//     dispatch({ type: GET_POST_SUCCESS, post }); // 성공
//   } catch (err) {
//     dispatch({ type: GET_POST_ERROR, error: err }); // 실패
//   }
// };
export const getPostThunk = createPromiseThunk(GET_POST, postAPI.getPostById);

// const initialState = {
//   posts: {
//     loading: false,
//     data: null,
//     error: null,
//   },
//   post: {
//     loading: false,
//     data: null,
//     error: null,
//   },
// };
const initialState = {
  posts: reducerUtils.initial(),
  post: reducerUtils.initial(),
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
      // const postsReducer = handleAsyncActions(GET_POSTS, 'posts');
      // return postsReducer(state, action)
      return handleAsyncActions(GET_POSTS, 'posts')(state, action);
    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_ERROR:
      // const postReducer = handleAsyncActions(GET_POST, 'post');
      // return postReducer(state, action);
      return handleAsyncActions(GET_POST, 'post')(state, action);
    default:
      return state;
  }
};

export default posts;
