import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

const CUSTOMER_SELECT_QUERY = gql`
  query {
    customers {
      id
      name
      email
      age
    }
  }
`;

const CUSTOMER_ADD_MUTATION = gql`
  mutation AddCustomer($name: String!, $email: String!, $age: Int!) {
    addCustomer(name: $name, email: $email, age: $age) {
      id
      name
      email
      age
    }
  }
`;

const CUSTOMER_EDIT_MUTATION = gql`
  mutation EditCustomer(
    $id: String!
    $name: String
    $email: String
    $age: Int
  ) {
    editCustomer(id: $id, name: $name, email: $email, age: $age) {
      id
      name
      email
      age
    }
  }
`;

const CUSTOMER_DELETE_MUTATION = gql`
  mutation DeleteCustomer($id: String!) {
    deleteCustomer(id: $id) {
      id
    }
  }
`;

function Button(props) {
  const { handleClick, children } = props;
  return (
    <button style={{ height: 50 }} type="button" onClick={() => handleClick()}>
      {children}
    </button>
  );
}

function App() {
  const { loading, error, data, refetch } = useQuery(CUSTOMER_SELECT_QUERY);
  const [addCustomer] = useMutation(CUSTOMER_ADD_MUTATION);
  const [editCustomer] = useMutation(CUSTOMER_EDIT_MUTATION);
  const [deleteCustomer] = useMutation(CUSTOMER_DELETE_MUTATION);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <section>
        <h1>Example-Express-GraphQL</h1>
      </section>
      <section>
        <Button
          handleClick={() => {
            refetch();
          }}
        >
          고객 데이터 요청
        </Button>
        <Button
          handleClick={() => {
            addCustomer({
              variables: {
                name: "elise",
                email: "elise@gmail.com",
                age: 24,
              },
            });
            refetch();
          }}
        >
          고객 데이터 생성
        </Button>
        <Button
          handleClick={() => {
            const elise = data.customers.find((c) => c.name === "elise");
            if (elise) {
              editCustomer({
                variables: {
                  id: elise.id,
                  name: "elise2",
                },
              });
              refetch();
            }
          }}
        >
          고객 데이터 변경
        </Button>
        <Button
          handleClick={() => {
            const elise = data.customers.find((c) => c.name === "elise2");
            if (elise) {
              deleteCustomer({
                variables: {
                  id: elise.id,
                },
              });
              refetch();
            }
          }}
        >
          고객 데이터 삭제
        </Button>
      </section>

      {loading && "Loading..."}
      {!loading && error && <section>error occured!</section>}
      {!loading && !error && data && (
        <section>
          {data.customers.map((customer) => (
            <ul key={customer.id} style={{ backgroundColor: "#ddd" }}>
              <li>{customer.id}</li>
              <li>{customer.name}</li>
              <li>{customer.age}</li>
              <li>{customer.email}</li>
            </ul>
          ))}
        </section>
      )}
    </div>
  );
}

export default App;
