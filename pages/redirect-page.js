import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function RedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.push('/pages/set-cookie.js');
  }, []);

  return <p>Redirecting...</p>;
}
