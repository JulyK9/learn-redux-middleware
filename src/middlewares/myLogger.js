const myLogger = (store) => (next) => (action) => {
  console.log(action); // 액션 출력
  const result = next(action); // 다음 미들웨어에게 액션을 전달
  return result; // 반환되는 값은 dispatch(action)의 결과물이 됨 (기본: undefined)
};

export default myLogger;
