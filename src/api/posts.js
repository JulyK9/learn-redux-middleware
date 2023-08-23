// n 밀리세컨드 동안 기다리는 프로미스를 만들어주는 함수
const sleep = (n) => {
  return new Promise((resolve) => setTimeout(resolve, n));
};

// post 목록 mock 데이터
const posts = [
  {
    id: 1,
    title: '리덕스 미들웨어 배우기',
    body: '리덕스 미들웨어를 직접 코드로 작성하며 해보기',
  },
  {
    id: 2,
    title: 'redux-thunk 배우기',
    body: 'redux-thunk를 직접 코드로 작성하며 해보기',
  },
  {
    id: 3,
    title: 'redux-saga 는 어렵다',
    body: 'redux-saga를 직접 코드로 작성하며 해보기',
  },
];

// 포스트 목록을 가져오는 함수
export const getPosts = async () => {
  await sleep(500); // 0.5초 지나서
  return posts; // posts를 가져옴(반환)
};

// ID로 포스트를 조회하는 비동기 함수
export const getPostById = async (id) => {
  await sleep(500); // 0.5초 지나서
  return posts.find((post) => post.id === id); // id가 같은 걸 찾아서 반환
};
