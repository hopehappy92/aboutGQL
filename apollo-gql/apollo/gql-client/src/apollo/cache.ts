/*
Cache

Apollo Client는 client에서만 접근할 수 있는 전역 상태 관리 방식 제공
  1. Apollo Client v3에서 새로 등장한 반응형 변수 ( Reactive variable )
  2. InMemoryCache
*/

import { InMemoryCache, makeVar, gql } from "@apollo/client";
import { IUser } from "interfaces";

// Local state, 반응형 변수 생성
export const currentUserVar = makeVar<IUser | null>(null);

// Local Queryies
// @client는 로컬에 요청할 때 사용, 그 외는 외부 GQL API에 요청
// @client 사용 시, 외부와 로컬 모두 쿼리 성공인 경우에 데이터 반환
export const GET_CURRENT_USER = gql`
  query {
    user @client
  }
`;

// Field policy of local state
// Apollo Client가 내부적으로 사용하는 캐시 생성
// client browser memory에 GQL request-response를 caching하는 공간 생성
export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        user() {
          return currentUserVar();
        },
      },
    },
  },
});
