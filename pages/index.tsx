import * as React from 'react';
import Link from 'next/link';
import { Button } from 'antd';

import Layout from '../components/Layout';

import { LoginComponent } from '../generated/apolloComponents';

const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 🎉 </h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>

      <LoginComponent>
        {mutate => (
          <Button
            onClick={async () => {
              const response = await mutate({
                variables: { email: 'test@test.test', password: 'password' },
              });

              console.log(response);
            }}
          >
            Login
          </Button>
        )}
      </LoginComponent>
    </Layout>
  );
};

export default IndexPage;
