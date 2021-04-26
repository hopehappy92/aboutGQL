/*
  Apollo Client 연결
*/

import Router from "Router";
import { ApolloProvider } from "@apollo/client";
import { client } from "apollo/client";

function App() {
  return (
    // ApolloProvider는 React Context API의 Provider와 비슷한 역할
    // ApolloProvider로 최상위 컴포넌트를 감싸면, 어디서든 Apollo Client에 접근 가능
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );
}

export default App;
