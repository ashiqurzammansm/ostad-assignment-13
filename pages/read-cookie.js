import { useEffect, useState } from 'react';

export default function ReadCookiePage() {
  const [userPreference, setUserPreference] = useState('');

  useEffect(() => {
    const preference = document.cookie.replace(/(?:(?:^|.*;\s*)user-preference\s*=\s*([^;]*).*$)|^.*$/, '$1');
    setUserPreference(preference);
  }, []);

  return (
    <div>
      <h1>Read User Preference</h1>
      <p>User Preference: {userPreference}</p>
    </div>
  );
}
