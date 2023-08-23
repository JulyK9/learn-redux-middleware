// Promise에 기반한 Thunk를 만들어주는 함수
export const createPromiseThunk = (type, promiseCreator) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  // 이 함수는 promiseCreator가 단 하나의 파라미터만 받는다는 전제하에 작성됨
  // 만약 여러 종류의 파라미터를 전달해야 하는 상황이라면 객체 타입의 파라미터를 받아오도록 하면 됨
  // 예시: writeComment({ postId: 1, text: '댓글 내용' })
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
