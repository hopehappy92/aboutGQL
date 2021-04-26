import { ApolloClient, createHttpLink, GraphQLRequest } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { cache, currentUserVar } from "apollo/cache";

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
});

// HTTP header로 사용자 인증
function contextSetter(_: GraphQLRequest, { headers }: any) {
  // local storage로 부터 토큰을 가져옴
  const token = currentUserVar()?.token;

  // context로부터 헤더를 받아와서 httpLink가 읽음
  return {
    headers: {
      ...headers,
      authorization: token ? token : "",
    },
  };
}

export const client = new ApolloClient({
  link: setContext(contextSetter).concat(httpLink),
  cache: cache,
});
