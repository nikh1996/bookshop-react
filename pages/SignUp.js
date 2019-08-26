import Layout from './components/HomePageLayout';
import Link from 'next/link';

export default function SignUp() {
  return (
    <div>
        <Layout>
            <h2>SignUp</h2>
            <Link href="/">
                <a>Home</a>
            </Link>
        </Layout>
    </div>
  );
}