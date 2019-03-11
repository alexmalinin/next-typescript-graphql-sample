import * as React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Layout as AntLayout, Menu } from 'antd';

const { Header, Footer } = AntLayout;

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
}) => (
  <AntLayout>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header>
      <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }}>
        <Menu.Item>
          <Link href="/">
            <a>Home</a>
          </Link>
        </Menu.Item>

        <Menu.Item>
          <Link href="/list-class">
            <a>List Example</a>
          </Link>
        </Menu.Item>

        <Menu.Item>
          <Link href="/list-fc">
            <a>List Example (as Functional Component)</a>
          </Link>
        </Menu.Item>

        <Menu.Item>
          <Link href="/about">
            <a>About</a>
          </Link>
        </Menu.Item>
      </Menu>
    </Header>
    {children}
    <Footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </Footer>
  </AntLayout>
);

export default Layout;
