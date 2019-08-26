import Layout from './components/HomePageLayout';
import Link from 'next/link';

export default function Index() {
  return (
    <div>
      <Layout>
        <div className="row">
          <div className="buttons">
            <Link href="/Login">
              <a>Login</a>
            </Link>
          </div>
          <div className="buttons">
            <Link href="/SignUp">
              <a>Register</a>
            </Link>
          </div>
        </div>
      </Layout>
    </div>
  );
}