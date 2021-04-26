/*
Context
모든 GragphQL API 요청이 불릴 때 마다 항상 실행되는 함수
리졸버의 3번째인자로 사용됨
보통 Context에 사용자 인증 정보를 저장해서 특정 API 실행 권한이 있는지 확인함
*/

import users from "../database/users";

const context = ({ req }) => {
  const token = req.headers.authorization || ""; // 로그인되어 있지 않거나, 토큰 없을때
  if (token.length !== 64) return { user: null };
  const user = users.find((user) => user.token === token);
  return { user };
};

export default context;
