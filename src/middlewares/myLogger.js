const myLogger = (store) => (next) => (action) => {
  console.log('action: ', action); // 액션 출력
  const result = next(action); // 다음 미들웨어에게 액션을 전달

  console.log('result: ', result); // 확인용

  // 업데이트 이후 상태 조회
  console.log('\t', store.getState()); // '\t' 는 탭 문자

  return result; // 반환되는 값은 dispatch(action)의 결과물이 됨 (기본: undefined)
};

export default myLogger;
