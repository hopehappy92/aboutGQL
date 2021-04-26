import React from "react";
import { ApolloProvider } from "@apollo/client";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import client from "./apollo";

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <TodoForm />
      <TodoList />
    </ApolloProvider>
  );
};

export default App;
