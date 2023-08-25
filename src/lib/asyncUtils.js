// Promise에 기반한 Thunk를 만들어주는 함수
// 디스패치하는 액션의 타입명 ("어떤 요청"에 대한 로딩,성공,실패인지만 다르고 로딩,성공,실패 자체는 동일하고
// 호출하는 api만 변하고 나머지는 동일하기 때문에,
// 변화하는 부분만 파라미터 (type, promiseCreator) 로 받아서 thunk 함수를 생성해주는 함수임
export const createPromiseThunk = (type, promiseCreator) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  // 이 함수는 promiseCreator가 단 하나의 파라미터만 받는다는 전제하에 작성됨
  // 만약 여러 종류의 파라미터를 전달해야 하는 상황이라면 객체 타입의 파라미터를 받아오도록 하면 됨
  // 예시: writeComment({ postId: 1, text: '댓글 내용' })
  // getPostsById 같은 경우 어떤 포스트를 조회할 것인지 id 라는 파라미터로 식별을 하기때문에
  // api 호출에서 필요에 따라 파라미터를 넣어줘야하는 경우도 있으므로 그것을 param으로 받는것
  return (param) => async (dispatch) => {
    dispatch({ type, param }); // 요청 시작
    console.log('param: ', param);

    try {
      // 결과물 이름은 payload라는 이름으로 통일
      const payload = await promiseCreator(param);
      dispatch({ type: SUCCESS, payload }); // 성공
    } catch (err) {
      dispatch({ type: ERROR, payload: err, error: true }); // 실패
    }
  };
};

// 리듀서에서 사용할 수 있는 여러 유틸 함수
export const reducerUtils = {
  // 초기상태: 초기 data 값은 기본적으로 null 이지만 바꿀 수 있음
  initial: (initialData = null) => ({
    loading: false,
    data: initialData,
    error: null,
  }),

  // 로딩중 상태. prevState의 경우엔 기본값은 null 이지만
  // 따로 값을 지정하면 null로 바꾸지 않고 다른 값을 유지시킬 수 있음
  loading: (prevState = null) => ({
    loading: true,
    data: prevState,
    error: null,
  }),

  // 성공 상태
  success: (payload) => ({
    loading: false,
    data: payload,
    error: null,
  }),

  // 싪패 상태
  error: (error) => ({
    loading: false,
    data: null,
    error: error,
  }),
};

// 비동기 관련 액션을 처리하는 리듀서 생성
// type은 액션타입, key는 상태의 key(예: posts, post)
export const handleAsyncActions = (type, key) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return (state, action) => {
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: reducerUtils.loading(),
        };
      case SUCCESS:
        return {
          ...state,
          [key]: reducerUtils.success(action.payload),
        };
      case ERROR:
        return {
          ...state,
          [key]: reducerUtils.error(action.payload),
        };
      default:
        return state;
    }
  };
};
