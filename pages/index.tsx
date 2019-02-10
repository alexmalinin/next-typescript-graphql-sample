import * as React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>

      <Mutation
        mutation={gql`
          mutation {
            login(email: "test@test.test", password: "password") {
              id
              name
              firstName
              lastName
              email
            }
          }
        `}
      >
        {mutate => (
          <button 
            onClick={async () => {
              const response = await mutate();

              console.log(response);
            }}
          >
            Login
          </button>
        )}
      </Mutation>
    </Layout>
  );
};

export default IndexPage;
