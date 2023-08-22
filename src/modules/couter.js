// Ducks 패턴
// 액션타입, 액션 생성자 함수, 리듀서를 한 파일에 작성하는 패턴

// 액션 타입
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// 액션 생성자 함수
export const increase = () => {
  return { type: INCREASE };
};

export const decrease = () => {
  return { type: DECREASE };
};

// 초기값 설정
const INITIAL_STATE = 0;

// 리듀서 설정
export default function counter(state = INITIAL_STATE, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}
