import Layout from './components/HomePageLayout';
import Link from 'next/link';

export default function Login() {
  return (
    <div>
      <Layout>
        <h2>Login</h2>
        <div className="buttons">
          Not yet registered?
          <Link href="/SignUp">
            <a>Register Now!</a>
          </Link>
        </div>
      </Layout>
    </div>
  );
}